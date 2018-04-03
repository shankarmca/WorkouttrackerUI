export class calroieSummary
{

    CurrentDay : number;
    CurrentWeek : number;
    CurrentMonth : number;
    constructor() { 
    }
   
}

export class chart
{
    ChartLabel : string[];
    ChartData : number[];
    constructor(){}
}

export class ChartModel{
    doughnutChartData : any[]; 
    doughnutChartLabels : string[];
    doughnutChartType : string;
}