# TitleBox.EditMode

TitleBox.EditMode
-


**


# TitleBox.EditMode


## Синтаксис


EditMode: boolean


## Описание


Свойство EditMode** задаёт значение флага «Режим редактирования» для заголовка экспресс-отчета.


## Комментарии


Если значение свойства установлено в true, то заголовок открывается в режиме редактирования, если в false - то в режиме просмотра. По умолчанию имеет значение true.


Значение свойства можно установить из JSON, а возвратить - при помощи метода getEditMode.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Определим, в каком режиме открыт экспресс-отчет - в режиме просмотра или в режиме редактирования:


// Получаем представление заголовка экспресс-отчета
var titleView = expressBox.getDataView().getTitleView();
// Указываем, что при выборе вершины документа, содержащего заголовок,
// не нужно выходить из режима редактирования заголовка
var node = expressBox.getDomNode();
titleView.bindCancelNode(node, true);
console.log("View mode: " + titleView.getViewMode());
console.log("Edit mode: " + titleView.getEditMode());

В результате выполнения примера будет получено, что заголовок не находится ни в режиме просмотра, ни в режиме редактирования:


View mode: false

Edit mode: false


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
