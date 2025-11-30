# IMsProblemCalculationSettings.DataRevisionOrigin

IMsProblemCalculationSettings.DataRevisionOrigin
-


# IMsProblemCalculationSettings.DataRevisionOrigin


## Синтаксис


DataRevisionOrigin: String;


## Описание


Свойство DataRevisionOrigin
 возвращает ключ объекта, инициирующего изменения данных куба.


## Комментарии


Инициаторами изменения данных куба могут выступать расширения «[Интерактивные
 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)» и «[Алгоритмы
 расчёта](CalculationAlgorithm.chm::/Purpose.htm)»:


	- если данные куба были изменены вручную в ячейках табличной области
	 формы ввода, то в свойстве будет содержаться ключ данной формы ввода;


	- если данные куба были изменены автоматически в ячейках табличной
	 области формы ввода при расчёте [алгоритма](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm),
	 то в свойстве будет содержаться ключ данной формы ввода и алгоритма
	 расчёта;


	- если данные куба были изменены автоматически при расчёте алгоритма,
	 то в свойстве будет содержаться ключ данного алгоритма расчёта.


Ключ объекта, инициирующего изменения данных, можно получить только
 через обработчик процесса сохранения данных в куб, подключенный к кубу.
 Для подключения обработчика используйте свойство [IStandardCube.SetDefaultCallback](KeCubes.chm::/Interface/IStandardCube/IStandardCube.SetDefaultCallback.htm).


Пример обработчика процесса сохранения данных в куб с использованием
 свойства [ICubeCallbackSaveArgument.Origin](kecubes.chm::/Interface/ICubeCallbackSaveArgument/ICubeCallbackSaveArgument.Origin.htm):


			Public Class CubeSaveCallBack: CubeCallBack

    // Обработка события, наступающего до сохранения куба

    Sub OnBeforeSave(callbackSaveArg: ICubeCallbackBeforeSaveArgument);

    Begin

        //...

        Debug.WriteLine("Событие, наступающее до сохранения куба, выполнено");

    End Sub OnBeforeSave;


    // Обработка события, наступающего после сохранения данных куба

    Sub OnAfterSave(callbackSaveArg: ICubeCallbackSaveArgument);

    Begin

        Debug.WriteLine("Ключ объекта, изменившего данные куба: " + callbackSaveArg.Origin);

        Debug.WriteLine("Событие, наступающее после сохранения куба, выполнено");

    End Sub OnAfterSave;

End Class CubeSaveCallBack;


После выполнения примера будет получен ключ объекта, изменившего данные
 куба при его сохранении.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
