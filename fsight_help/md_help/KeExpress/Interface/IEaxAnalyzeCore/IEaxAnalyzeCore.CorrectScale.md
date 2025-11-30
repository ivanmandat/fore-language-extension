# IEaxAnalyzeCore.CorrectScale

IEaxAnalyzeCore.CorrectScale
-


# IEaxAnalyzeCore.CorrectScale


## Синтаксис


CorrectScale(Scale: Double; Size: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm)):
 Double;


## Параметры


Scale. Масштаб;


Size. Размер.


## Описание


Метод CorrectScale осуществляет
 корректировку масштаба относительно размера отображаемой области экспресс-отчета.


## Комментарии


Для получения параметров экспресс-отчета используйте свойство [IEaxAnalyzer.Options](../IEaxAnalyzer/IEaxAnalyzer.Options.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_TABLE.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EAX: IEaxAnalyzer;

	    Scale: Double;

	    Size: IGxSizeF;

	Begin

	    MB := MetabaseClass.Active;

	    EAX := MB.ItemById("EXPRESS_TABLE").Edit As IEaxAnalyzer;

	    Scale := 0.50;

	    Size := New GxSizeF.Create(50, 100);

	    EAX.CorrectScale(Scale, Size);

	    (EAX As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для экспресс-отчета будет установлен
 масштаб 50% относительно заданного размера отображаемой области.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
