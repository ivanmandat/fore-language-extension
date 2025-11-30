# IMDCalculationInstance.CreateFormulasConverter

IMDCalculationInstance.CreateFormulasConverter
-


# IMDCalculationInstance.CreateFormulasConverter


## Синтаксис


CreateFormulasConverter(Cube: [ICalculatedCubeInstance](../ICalculatedCubeInstance/ICalculatedCubeInstance.htm)):
 [IMDCalculationFormulasConverter](../IMDCalculationFormulasConverter/IMDCalculationFormulasConverter.htm);


## Параметры


Cube. Вычисляемый куб, в который
 необходимо конвертировать формулы из многомерного расчета.


## Описание


Метод CreateFormulasConverter
 создает объект, предназначенный для конвертации формул из многомерного
 расчета в указанный вычисляемый куб.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc и вычисляемого куба с идентификатором
 CalcCube. Многомерный расчет и вычисляемый куб должны быть построены на
 одинаковых источниках данных.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CalcCubeInst: ICalculatedCubeInstance;

	    MDCalcInst: IMDCalculationInstance;

	    FConverter: IMDCalculationFormulasConverter;

	    bStruct: Boolean = False;

	    StructError: String;

	Begin

	    MB := MetabaseClass.Active;

	    CalcCubeInst := MB.ItemById("CalcCube").Open(Null) As ICalculatedCubeInstance;

	    MDCalcInst := MB.ItemById("MDCalc").Open(Null) As IMDCalculationInstance;

	    FConverter := MDCalcInst.CreateFormulasConverter(CalcCubeInst);

	    FConverter.CorrectSourceFormulas := True;

	    Try

	        //Проверка соответствия структур многомерного расчета

	        //и вычисляемого куба

	        FConverter.ValidateStructure;

	        bStruct := True;

	    Except On e: Exception Do

	        StructError := e.Message;

	    End Try;

	    If Not bStruct Then

	        Debug.WriteLine("Структура многомерного расчета и вычисляемого куба не совместимы");

	        Debug.WriteLine("Ошибка: " + StructError);

	    Else

	        //Конвертация формул

	        FConverter.BatchMode := ConvertBatchMode.Update;

	        FConverter.Convert;

	        CalcCubeInst.SaveFormulas;

	    End If;

	End Sub UserProc;


При выполнении примера будет произведена проверка соответствия структур
 многомерного расчета и вычисляемого куба. Если структуры одинаковые, то
 формулы в вычисляемом кубе будут обновлены в соответствии с формулами
 многомерного расчета. Коррекция формул многомерного расчета произойдет
 перед конвертацией в вычисляемый куб.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
