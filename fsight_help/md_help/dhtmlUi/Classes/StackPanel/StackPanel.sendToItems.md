# StackPanel.sendToItems

StackPanel.sendToItems
-


# StackPanel.sendToItems


## Синтаксис


sendToItems (value, params)


## Параметры


value. Название метода;


params. Параметры.


## Описание


Метод sendToItems вызывает указанный метод для всех элементов компонента.


## Пример


Для выполнения примера создайте компонент [StackPanel](../../Components/StackPanel/StackPanel.htm) с наименованием «stackPanel» и добавьте в него элементы (см. описание конструктора [StackPanel](Constructor_StackPanel.htm)). Добавим кнопку, при нажатии на которую будет меняться содержимое элементов компонента:


var but1 = new PP.Ui.Button(


   {


        Content: "Изменить содержимое",


        ParentNode: document.getElementById("but1"),


        Click: changeContent


   })


function changeContent()


   {


         stackPanel.sendToItems("setContent", "Кнопка")


   }


После выполнения примера при нажатии на кнопку «Изменить содержимое» для всех элементов компонента будет установлено новое содержимое - текст «Кнопка».


См. также:


[StackPanel](StackPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
