# IMapLegend.CustomFormat

IMapLegend.CustomFormat
-


# IMapLegend.CustomFormat


## Синтаксис


CustomFormat: String;


## Описание


Свойство CustomFormat позволяет
 задавать пользовательский формат числа в легенде.


## Комментарии


Формат отображения данных формируется с использованием зарезервированных
 кодов форматов. Описание кодов представлено в разделе «[Формат
 числа](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm)». Задавайте формат отображения данных в русскоязычном
 варианте [кода
 формата](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm) для корректного отображения при изменении
 [языковых
 настроек интерфейса](GetStarted.chm::/Interface/Intro_Language.htm) продукта «Форсайт. Аналитическая платформа».
 Например, формат отображения даты ДД.ММ.ГГГГ будет корректно отображаться
 при любом выбранном языке интерфейса. В то же время DD.MM.YYYY будет работать
 только в англоязычном варианте.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта, содержащая только картографический показатель.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Legend: IMapLegend;

	Begin

	    Map := UiMap1.Map;

	    Legend := New DxMapLegend.Create As IMapLegend;

	    Map.View.Legend := Legend;

	    Legend.Visible := True;

	    Legend.BeginUpdate;

	    Layer := Map.Layers.FindByName("Regions");

	    Legend.Visual := Layer.Visuals.Item(0);

	    Legend.CustomFormat := "0,0";

	    Legend.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера для картографического показателя будет отображена
 легенда. Значения в легенде будут представлены в числовом формате с одним
 десятичным знаком.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
