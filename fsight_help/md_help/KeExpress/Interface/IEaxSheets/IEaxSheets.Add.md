# IEaxSheets.Add

IEaxSheets.Add
-


# IEaxSheets.Add


## Синтаксис


Add(Value: [IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm)):
 [IEaxSheet](../IEaxSheet/IEaxSheet.htm);


## Параметры


Value. Экспресс-отчет, на базе
 которого будет создан лист.


## Описание


Метод Add создает лист на базе
 существующего экспресс-отчета.


## Комментарии


При выполнении метода Add для
 исходного экспресс-отчета будет добавлен дочерний объект, являющийся копией
 экспресс-отчета, передаваемого в параметре Value.


## Пример


Для выполнения примера предполагается наличие двух экспресс-отчетов
 с идентификаторами EXPRESS_REPORT, EXPRESS_REPORT_2 и куба с идентификатором
 CUBE.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    Sheet: IEaxSheet;

	    CubeInst: ICubeInstance;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    //Создание листа на базе существующего экспресс-отчета

	    Eax.Sheets.Add(MB.ItemById("EXPRESS_REPORT_2").Bind As IEaxAnalyzer);

	    //Создание листа на базе нового экспресс-отчета

	    Sheet := Eax.Sheets.AddNew;

	    //Указание источника для нового листа

	    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    Sheet.Analyzer.OpenCube(CubeInst);

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в экспресс-отчете EXPRESS_REPORT будут созданы
 два листа. Первый лист будет основан на существующем экспресс-отчете EXPRESS_REPORT_2,
 второй будет основан на новом экспресс-отчете, источником для которого
 будет установлен куб CUBE.


См. также:


[IEaxSheets](IEaxSheets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
