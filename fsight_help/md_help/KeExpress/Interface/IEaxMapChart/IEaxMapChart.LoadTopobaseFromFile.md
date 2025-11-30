# IEaxMapChart.LoadTopobaseFromFile

IEaxMapChart.LoadTopobaseFromFile
-


# IEaxMapChart.LoadTopobaseFromFile


## Синтаксис


LoadTopobaseFromFile(FileName: String);


## Параметры


FileName. Путь
 и наименование файла.


## Описание


Метод LoadTopobaseFromFile осуществляет
 загрузку карты из файла.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT и файла C:\map.svg.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    EMap: IEaxMapChart;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    EMap := Expr.MapChart;

	    EMap.LoadTopobaseFromFile("C:\map.svg");

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера карта экспресс-отчета будут загружена
 из файла.


См. также:


[IEaxMapChart](IEaxMapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
