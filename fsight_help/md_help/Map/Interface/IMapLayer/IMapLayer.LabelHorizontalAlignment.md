# IMapLayer.LabelHorizontalAlignment

IMapLayer.LabelHorizontalAlignment
-


# IMapLayer.LabelHorizontalAlignment


## Синтаксис


LabelHorizontalAlignment: [MapLayerLabelHorizontalAlignment](../../Enums/MapLayerLabelHorizontalAlignment.htm);


## Описание


Свойство LabelHorizontalAlignment
 определяет положение подписи слоя карты по горизонтали относительно позиции,
 заданной в топооснове.


## Комментарии


Для определения положения подписи слоя карты по вертикали относительно
 позиции из топоосновы используйте [IMapLayer.LabelVerticalAlignment](IMapLayer.LabelVerticalAlignment.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 ReportBox, UiReport с наименованиями Button1, ReportBox1 и UiReport1 соответственно.
 UiReport1 является источником данных для ReportBox1. Также для выполнения
 примера в репозитории необходимо наличие регламентного отчета с картой,
 на которой будут отображаться подписи слоя. Данная карта будет являться
 источником данных для UiReport1.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub UserProc;

	Var

	    regrep: IPrxReport;

	    sheet: IPrxSheet;

	    table: IPrxTable;

	    objects: ITabObjects;

	    map: IMap;

	    layer: IMapLayers;

	    label: IMapLayer;

	Begin

	    // Получаем регламентный отчет

	    regrep := UiReport1.Report;

	    // Получаем карту из регламентного отчета

	    sheet := regrep.Activesheet;

	    table := sheet As IPrxTable;

	    objects := table.TabSheet.Objects;

	    map := objects.Item(0).Extension As IMap;

	    // Получаем коллекцию слоев карты

	    layer := map.Layers;

	    // Получаем слой

	    label := layer.FindByName("Regions");

	    // Изменяем положение
	 подписи по вертикали

	    label.LabelVerticalAlignment := MapLayerLabelVerticalAlignment.Bottom;

	    // Изменяем положение подписи
	 по горизонтали

	    label.LabelHorizontalAlignment := MapLayerLabelHorizontalAlignment.Right;

	    // Обновляем карту

	   map.Refresh;

	End Sub UserProc;


После выполнения примера подписи слоя «Regions» будут отображаться ниже
 и правее относительно позиции из топоосновы.


См. также:


[IMapLayer](IMapLayer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
