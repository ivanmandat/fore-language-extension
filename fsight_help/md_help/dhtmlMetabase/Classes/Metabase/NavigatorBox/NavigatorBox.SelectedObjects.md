# NavigatorBox.SelectedObjects

NavigatorBox.SelectedObjects
-


# NavigatorBox.SelectedObjects


## Синтаксис


SelectedObjects: Array;


## Описание


Свойство SelectedObjects содержит
 коллекцию выделенных объектов дерева навигатора.


## Комментарии


Свойство возвращается при помощи метода getSelectedObjects()
 и возвращает массив экземпляров класса PP.Mb.[Object](dhtmlCommon.chm::/Classes/object/object.htm).


Свойство задается при помощи метода setSelectedObjects(objects:
 Array, fireEvent: Boolean, clearSelection: Boolean, setFocus: Boolean,
 scrollToFocus: Boolean)


Параметры:


objects. Массив ключей объектов,
 которые необходимо выделить в дереве навигатора;


fireEvent.
 Определяет, будет ли при выполнении метода генерироваться событие ObjectListSelectionChanged: true - будет сгенерировано, false - не будет сгенерировано;


clearSelection.
 Определяет, будет ли очищено старое выделение: true
 - будет очищено, false - останется;


setFocus.
 Определяет, будет ли установлен фокус на первый из выделенных элементов: true - фокус будет установлен, false - фокус не будет установлен;


scrollToFocus.
 Определяет, будет ли прокручено дерево объектов до элемента, на
 котором установлен фокус: true
 - дерево будет прокручено, false
 - дерево не будет прокручено.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). Предполагается наличие в репозитории
 объектов с ключами 4153 и 3268. Выделим в дереве навигатора указанные
 объекты:


navbox.setSelectedObjects([4153, 3268], true, true, true, true)
После выполнения примера в дереве навигатора будут выделены объекты
 с указанными ключами. При этом для объекта с ключом 4153 будет установлен
 фокус и дерево объектов будет прокручено до него. Если ранее были выделены
 какие-то объекты, выделение будет снято.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
