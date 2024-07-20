import { Request, Response } from 'express';
import { PythonShell } from 'python-shell';
import path from 'path';

export const callPythonScript = (_req: Request, res: Response) => {
  try {
    const options = {
      scriptPath: path.join(__dirname, '../scripts/'),
    };

    PythonShell.run('analysis.py', options).then(() => {
      const csvFilePath = path.join(options.scriptPath, 'inventory_report.csv');

      res.download(csvFilePath, 'inventory_report.csv', (err) => {
        if (err) {
          res.status(500).send('Erro ao gerar o relatório.');
        }
      });
    });
  } catch (err) {
    res.status(500).send('Erro ao executar o script.');
  }
};
