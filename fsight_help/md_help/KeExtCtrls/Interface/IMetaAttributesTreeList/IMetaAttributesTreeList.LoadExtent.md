# IMetaAttributesTreeList.LoadExtent

IMetaAttributesTreeList.LoadExtent
-


# IMetaAttributesTreeList.LoadExtent


## Синтаксис


LoadExtent: Integer;


## Описание


Свойство LoadExtent определяет
 ограничение на количество выводимых рядов в компоненте.


## Комментарии


Ограничения свойства действуют только в интерфейсе. Ограничение в ядре
 происходит при вызове [IMetaHierarchy.LeafLoadExtent](KeRds.chm::/Interface/IMetaHierarchy/IMetaHierarchy.LeafLoadExtent.htm).


По умолчанию, у всех компонентов класса ограничение установлено на уровне
 65.536 элементов. Значение LoadExtent меньшее либо равное нулю отключает
 его.


## Пример


Для выполнения примера потребуется форма с расположенными на ней компонентами
 Button и MetaAttributesTreeList с наименованиями «Button1» и «MetaAttributesTreeList1»
 соответственно. Необходимо настроить их на работу с какой-либо базой данных
 временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    MetaAttributesTreeList1.LoadExtent := 10;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на компонент Button, будет установлено
 ограничение на количество выводимых рядов в компоненте MetaAttributesTreeList.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
