# INavigationBarPadList.ItemById

INavigationBarPadList.ItemById
-


# INavigationBarPadList.ItemById


## Синтаксис


ItemById(Id: String): [INavigationBarPad](../INavigationBarPad/INavigationBarPad.htm)


## Параметры


Id.
 Идентификатор вкладки.


## Описание


Свойство ItemById возвращает
 параметры вкладки с указанным идентификатором.


## Комментарии


В качестве значения параметра Id
 необходимо указать [идентификатор](../INavigationBarPad/INavigationBarPad.SystemId.htm),
 который доступен только у системных вкладок. Системную вкладку можно получить
 в коллекции [IWidget.Pads](../IWidget/IWidget.Pads.htm) или
 в коллекции [INavigationBar.Pads](../INavigationBar/INavigationBar.Pads.htm)
 при условии, что для неё свойство [INavigationBarPad.IsSystem](../INavigationBarPad/INavigationBarPad.IsSystem.htm)
 возвращает значение True. Компонент
 [NavigationBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/NavigationBar.htm)
 будет отображать системные вкладки, если он задан в свойстве [NavBar](../IWidget/IWidget.NavBar.htm)
 какого-либо компонента, реализующего набор системных вкладок.


Для работа со вкладками, которые созданы в прикладном коде, используйте
 свойства [INavigationBarPadList.Item](INavigationBarPadList.Item.htm),
 [INavigationBar.ActivePad](../INavigationBar/INavigationBar.ActivePad.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ChartWidget с наименованием
 «ChartWidget1», компонента NavigationBar и компонента UiErAnalyzer, который
 является источником для «ChartWidget1». NavigationBar подключен к «ChartWidget1»
 и используется в качестве визуального компонента для отображения вкладок.
 UiErAnalyzer подключен к какому-либо экспресс-отчёту, в котором создана
 диаграмма.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Pad: INavigationBarPad;

Begin

    Pad := ChartWidget1.Pads.ItemById("ChartValueAxisY");

    Pad.Visible := False;

End Sub Button1OnClick;


При нажатии на кнопку в коллекции вкладок, которые используются для
 настройки диаграммы, будет скрыта вкладка по настройке оси значений (Y).


См. также:


[INavigationBarPadList](INavigationBarPadList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
