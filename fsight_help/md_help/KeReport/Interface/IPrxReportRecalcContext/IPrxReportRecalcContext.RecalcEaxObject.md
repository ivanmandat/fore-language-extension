# IPrxReportRecalcContext.RecalcEaxObject

IPrxReportRecalcContext.RecalcEaxObject
-


# IPrxReportRecalcContext.RecalcEaxObject


## Синтаксис


		RecalcEaxObject(Obj: [IEaxObject](KeExpress.chm::/Interface/IEaxObject/IEaxObject.htm)):
		 [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


Obj. Объект отчёта.


## Описание


Свойство RecalcEaxObject определяет,
 необходимо ли вычислить выбранный объект.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчёта с идентификатором REPORT, в котором есть минимум один [объект](KeExpress.chm::/Interface/IEaxObject/IEaxObject.htm).


Добавьте ссылки на системные сборки: Express, Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Report: IPrxReport;

		    Context: IPrxReportRecalcContext;

		    DataArea: IEaxDataArea;

		    EaxObj: IEaxObject;

		Begin

		    // Получаем репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем отчёт

		    Report := MB.ItemById("REPORT").Edit As IPrxReport;

		    // Получаем контекст для вычисления

		    Context := Report.CreateRecalcContext;

		    Context.Clear;

		    //Получаем аналитическую область данных

		    DataArea := Report.DataArea;

		    //Получаем объект аналитической области

		    EaxObj := DataArea.Slices.Item(0).Views.Item(0);

		    //Вычисляем объект

		    Context.RecalcEaxObject(EaxObj) := TriState.OnOption;

		    Report.RecalcC(Context);

		    //Сохраняем результат вычисления

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будет произведено вычисление объекта.


См. также:


[IPrxReportRecalcContext](IPrxReportRecalcContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
