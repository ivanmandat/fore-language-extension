# IMap.SaveMetafileToFile

IMap.SaveMetafileToFile
-


# IMap.SaveMetafileToFile


## Синтаксис


SaveMetafileToFile(


FileName: String;


Type: [GxEmfType](ModDrawing.chm::/enums/GxEmfType.htm);


Width: Integer;


Height: Integer;


Dpi: Double);


## Параметры


FileName. Путь к файлу
 для сохранения;


Type. Тип сохраняемого
 метафайла;


Width. Ширина изображения;


Height. Высота изображения;


Dpi. Разрешающая способность
 (количество пикселей на дюйм).


## Описание


Метод SaveMetafileToFile выгружает
 карту в метафайл заданного типа.


## Комментарии


Метод выгружает карту в файл с расширением EMF (*.emf).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS.


Добавьте ссылки на системные сборки: Drawing, Express, Map, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IMap;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    Map := Express.Map.Map;

	    Map.SaveMetafileToFile("C:\img", GxEmfType.EmfOnly, 600, 600, 300);

	End Sub UserProc;


В результате выполнения примера карта отчета будет выгружена в метафайл.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
