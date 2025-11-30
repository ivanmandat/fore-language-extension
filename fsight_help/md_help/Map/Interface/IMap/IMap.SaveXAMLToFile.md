# IMap.SaveXAMLToFile

IMap.SaveXAMLToFile
-


# IMap.SaveXAMLToFile


## Синтаксис


SaveXAMLToFile(FileName: String; Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
 [Scale: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm)
 = Null]);


## Параметры


FileName - путь, имя и тип
 файла;


Rect - координаты и размер
 карты (в мм);


Scale - масштаб карты. По умолчанию
 равен 1.0.


## Описание


Метод SaveXAMLToFile выгружает
 карту в XAML-файл (*.xaml).


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


Добавьте ссылки на системные сборки: Drawing, Map, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Map: IMap;

	    Rect: IGxRectF;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGULAR_REPORT_MAPXAML").Bind As IPrxReport;

	    Map := Report.ActiveSheet.Table.Objects.Item(0).Extension As IMap;

	    Rect := Map.View.ViewRect;

	    Map.SaveXAMLToFile("D:\export+rubbish", Rect);

	    (Report As IMetabaseObject).Save

	End Sub UserProc;


После выполнения примера карта будет выгружена в файл Map.xaml.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
