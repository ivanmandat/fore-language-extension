# IEaxObject.PrintSettings

IEaxObject.PrintSettings
-


# IEaxObject.PrintSettings


## Синтаксис


PrintSettings: [IEaxObjectPrintSettings](../IEaxObjectPrintSettings/IEaxObjectPrintSettings.htm);


## Описание


Свойство PrintSettings возвращает
 параметры печати и экспорта объекта экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    PrSetting: IEaxObjectPrintSettings;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    PrSetting := Expr.Grid.PrintSettings;

	    PrSetting.BlackAndWhite := True;

	    PrSetting.Scale := -1;

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут изменены параметры печати и экспорта
 таблицы экспресс-отчета. Печать (экспорт) таблицы будет производиться
 в черно-белом формате с подбором масштаба по ширине страницы.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
