# WbkDataView.getMetaAttrTree

WbkDataView.getMetaAttrTree
-


# WbkDataView.getMetaAttrTree


## Синтаксис


getMetaAttrTree ();


## Описание


Метод getMetaAttrTree возвращает
 дерево рядов.


## Комментарии


Возвращает экземпляр класса [HieTreeView](../HieTreeView/HieTreeView.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


//Получим дерево рядов
var metaAttrTree = wbkDataBox.getMetaAttrTree();
metaAttrTree.hide();

После выполнения примера будет скрыто дерево рядов.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
