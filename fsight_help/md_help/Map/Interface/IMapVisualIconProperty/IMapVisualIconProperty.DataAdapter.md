# IMapVisualIconProperty.DataAdapter

IMapVisualIconProperty.DataAdapter
-


# IMapVisualIconProperty.DataAdapter


## Синтаксис


DataAdapter: Object;


## Описание


Свойство DataAdapter определяет
 источник данных, в соответствии с которым будет производиться построение
 показателя.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. Также должен быть реализован класс VisualDataAdapter,
 создающий динамический источник данных. Пример данного класса содержится
 в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm). В
 файловой системе должен присутствовать файл «C:\blue.gif», содержащий
 изображение.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    ImageVisual: IMapImageVisual;

	    Image: IGxImage;

	    ImageProp: IMapVisualIconProperty;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    ImageVisual := Layer.Visuals.AddImageVisual;

	    ImageVisual.DataAdapter := New VisualDataAdapter.Create As IMapDynamicDataAdapter;

	    ImageProp := ImageVisual.Image;

	    ImageProp.Dependent := False;

	    Image := GxImage.FromFile("C:\blue.gif");

	    ImageProp.Value := Image;

	    ImageProp.DataAdapter := ImageVisual.DataAdapter;

	    ImageVisual.Height.Value := 4;

	    ImageVisual.Width.Value := 4;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен пиктографический
 показатель, длина и ширина которого будет 4 пикселя. Пиктограмма показателя
 будет взята из файла «C:\blue.gif». Источник данных, в соответствии с
 которым будет производиться построение, совпадает с источником данных
 показателя.


См. также:


[IMapVisualIconProperty](IMapVisualIconProperty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
