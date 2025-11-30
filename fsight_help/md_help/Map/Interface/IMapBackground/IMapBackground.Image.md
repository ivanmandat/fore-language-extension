# IMapBackground.Image

IMapBackground.Image
-


# IMapBackground.Image


## Синтаксис


Image: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство Image определяет
 изображение, которое используется в качестве фона легенды.


## Комментарии


Для определения способа размещения изображения в качестве фона легенды
 используйте [IMapBackground.ImageDrawStyle](IMapBackground.ImageDrawStyle.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов ReportBox,
 UiReport с наименованиями ReportBox1 и UiReport1 соответственно. UiReport1
 является источником данных для ReportBox1. Также необходимо наличие регламентного
 отчета, содержащего карту с включенной легендой, и который является источником
 данных для «UiReport1». В файловой системе необходимо наличие изображения
 «C:\Image.png».


Добавьте ссылки на системные сборки: Drawing, Map, Report, Tab.


	Sub UserProc;

	Var

	    regrep: IPrxReport;

	    sheet: IPrxSheet;

	    table: IPrxTable;

	    objects: ITabObjects;

	    map: IMap;

	    legend: IMapLegend;

	    background: IMapBackground;

	    image: IGxImage;

	Begin

	    // Получим регламентный отчет

	    regrep := UiReport1.Report;

	    // Получим карту из регламентного отчета

	    sheet := regrep.Activesheet;

	    table := sheet As IPrxTable;

	    objects := table.TabSheet.Objects;

	    map := objects.Item(0).Extension As IMap;

	    // Получим легенду карты

	    legend := map.View.Legend;

	    // Получим фон легенды на карте

	    background := legend.Background;

	    // Установим тип заливки - изображение

	    background.Type := MapBackgroundType.Picture;

	    // Создадим изображение из файла

	    Image := New GxImage.CreateFromFile("C:\Image.png");

	    // Зададим изображение

	    background.Image := image;

	    // Зададим способ размещения изображения - растянуть

	    background.ImageDrawStyle := MapBackgroundImageDrawStyle.Stretch;

	    // Обновим карту

	    map.Refresh;

	End Sub UserProc;


После выполнения примера в качестве фона легенды на карте установится
 изображение, которое займет всю область легенды.


См. также:


[IMapBackground](IMapBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
