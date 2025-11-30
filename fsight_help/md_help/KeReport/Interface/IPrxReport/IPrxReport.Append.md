# IPrxReport.Append

IPrxReport.Append
-


# IPrxReport.Append


## Синтаксис


Append(Source: [IPrxReport](IPrxReport.htm));


## Параметры


Source. Идентификатор отчета-шаблона.


## Описание


Метод Append добавляет к отчету
 листы отчета-шаблона.


## Комментарии


Идентификатор отчёта шаблона передаётся с помощью параметра Source.


Если у регламентного отчета и добавляемого к нему [отчета-шаблона](uireport.chm::/desktop/reports/operationreport/report_template.htm)
 совпадают наименования листов, они корректируются как при копировании
 листов. По такому же принципу корректируются ссылки на диапазоны в листах
 отчета-шаблона.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором REP_SOURCE и регламентного отчета с идентификатором
 REP_DEST. Создайте форму, добавьте на нее кнопку с наименованием Button1.


Добавьте ссылку на системную сборку Report.


	Const R_S = "REP_SOURCE";

	Const R_D = "REP_DEST";


	Class TEST_FORMForm: Form

	    Button1: Button;

	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var RepSource, RepDest: IPrxReport;

	    Begin

	        RepSource := MetabaseClass.Active.ItemById(R_S).Edit As IPrxReport;

	        RepDest := MetabaseClass.Active.ItemById(R_D).Edit As IPrxReport;

	        RepDest.Append(RepSource);

	        (RepDest As IMetabaseObject).Save;

	    End Sub Button1OnClick;

	End Class TEST_FORMForm;


При нажатии на кнопку Button1
 листы регламентного отчета с идентификатором REP_SOURCE будут добавлены
 в регламентный отчет с идентификатором REP_DEST.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
