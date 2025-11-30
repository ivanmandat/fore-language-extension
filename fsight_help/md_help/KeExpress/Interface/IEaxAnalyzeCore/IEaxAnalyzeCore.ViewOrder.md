# IEaxAnalyzeCore.ViewOrder

IEaxAnalyzeCore.ViewOrder
-


# IEaxAnalyzeCore.ViewOrder


## Синтаксис


ViewOrder(Index: Integer): [IEaxObject](../IEaxObject/IEaxObject.htm);


## Параметры


Index. Индекс объекта экспресс-отчета.


## Описание


Свойство ViewOrder определяет
 порядок отображения объектов в окне экспресс-отчета и при печати на принтере.
 Нумерация ведется слева направо.


## Пример


Для выполнения примера необходимо наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Expr.ViewOrder(1) := Expr.Grid As IEaxObject;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в окне экспресс-отчета с левой стороны (если
 выбрано расположение представлений данных «Горизонтально»)
 или сверху (если выбрано «Вертикально»)
 будет отображаться таблица с данными экспресс-отчета. Страница с таблицей
 при печати будет первой.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
