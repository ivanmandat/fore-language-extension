# TreeListView.AutoScrollDelay

TreeListView.AutoScrollDelay
-


# TreeListView.AutoScrollDelay


## Синтаксис


AutoScrollDelay: Number;


## Описание


Свойство AutoScrollDelay определяет
 задержку между изменениями положения автопрокрутки.


## Комментарии


Значение задается в миллисекундах, значение по умолчанию - 30.


Значение свойства устанавливается из JSON и с помощью метода setAutoScrollDelay,
 а возвращается с помощью метода getAutoScrollDelay.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим задержку автопрокрутки
Tree.setAutoScrollDelay(60);
В результате выполнения примера была изменена задержка автопрокрутки.


См. также:


[TreeListView](TreeListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
