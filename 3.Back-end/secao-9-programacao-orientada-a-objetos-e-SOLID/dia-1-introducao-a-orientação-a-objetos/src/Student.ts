export class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _projectsGrades: number[];

  constructor(enrollment: string, name: string, examsGrades: number [], projectsGrades: number[] ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = examsGrades;
    this._projectsGrades = projectsGrades;
  }

  
}