# IMDCalculationInstance.GetProcedureText

IMDCalculationInstance.GetProcedureText
-


# IMDCalculationInstance.GetProcedureText


## Синтаксис


GetProcedureText(Args: [IMDCalculationCalculateArgs](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.htm); ProcName: String): String;


## Параметры


Args. Параметры, в соответствии с которыми будет генерироваться текст процедуры выполнения многомерного расчета на сервере БД.


ProcName. Наименование процедуры, которая будет создаваться на сервере БД при выполнении сгенерированного кода.


## Описание


Метод GetProcedureText генерирует текст процедуры, которая может быть использована для запуска выполнения многомерного расчета на сервере БД.


## Комментарии


Если в методе указан параметр ProcName, то в текст процедуры также будет включена строка «CREATE PROCEDURE <ProcName> as». При выполнении полученного кода данная строка позволит вместо запуска многомерного расчета, создать на сервере БД процедуру.


Если в многомерном расчете [установлена зависимость формул от времени](../IMDCalculation/IMDCalculation.TimeDependent.htm) и в аргументе Args указаны параметры [DateBegin](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.DateBegin.htm) и [DateEnd](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.DateEnd.htm), то в строку «CREATE PROCEDURE <ProcName> as» также будут добавлены два параметра для указания даты начала и окончания периода. Строка будет иметь следующий вид: «CREATE PROCEDURE <ProcName>(ArgDateBegin in DATE, ArgDateEnd in DATE) as».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Memo с наименованием «Memo1». В репозитории имеется многомерный расчет на сервере БД с идентификатором «MDCalc_1». В настройках многомерного расчета установлена зависимость формул от времени.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        MDInst: IMDCalculationInstance;

        CalcArg: IMDCalculationCalculateArgs;

        Text_Proc: String;

    Begin

        MB := MetabaseClass.Active;

        MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

        CalcArg := MDInst.CreateCalculateArgs;

        CalcArg.CleanType := MDCalculateArgsCleanType.None;

        CalcArg.UpdateType := MDCalculateArgsUpdateType.All;

        CalcArg.DateBegin := DateTime.ComposeDay(2000, 1, 1);

        CalcArg.DateEnd := DateTime.ComposeDay(2010, 12, 31);

        Text_Proc := MDInst.GetProcedureText(CalcArg, "CalculateProc");

        Memo1.Lines.Add(Text_Proc);

    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет сгенерирован текст процедуры, которая может быть использована для запуска выполнения многомерного расчета на сервере БД. Полученный текст будет выведен в компонент «Memo1». Данный текст будет содержать строку для создания процедуры на сервере БД.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
