# NavigationItem.Collapsing

NavigationItem.Collapsing
-


# NavigationItem.Collapsing


## Синтаксис


Collapsing: function(sender,args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Collapsing наступает при закрытии вкладки.


## Комментарии


Вкладка закрывается при нажатии на заголовок, если для свойства [NavigationBar.IsAlwaysExpanded](../NavigationBar/NavigationBar.IsAlwaysExpanded.htm) установлено значение false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [NavigationBar](../../Components/NavigationBar/NavigationBar.htm) с наименованием «NB» (см. «[Пример создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавим обработчики событий Collapsing и [Expanded](NavigationItem.Expanding.htm):


NB.getItem(0).Collapsing.add(function (sender, args)


{


    NB.getItem(0).getHeaderControl().setChecked(false);


});


NB.getItem(1).Collapsing.add(function (sender, args)


{


    NB.getItem(1).getHeaderControl().setChecked(false);


});


NB.getItem(0).Expanding.add(function (sender, args)


{


    NB.getItem(0).getHeaderControl().setChecked(true);


});


NB.getItem(1).Expanding.add(function (sender, args)


{


    NB.getItem(1).getHeaderControl().setChecked(true);


});


После выполнения примера при нажатии на заголовок первой вкладки для [элемента управления в заголовке](NavigationItem.HeaderControl.htm) (по умолчанию это экземпляр компонента CheckBox) устанавливается флаг. Когда вкладка сворачивается (либо при повторном щелчке мыши, либо при открытии второй вкладки), флаг снимается. То же происходит при открытии/закрытии второй вкладки.


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
