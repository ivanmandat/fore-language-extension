# IDefaultBehaviour.SelectionColor

IDefaultBehaviour.SelectionColor
-


# IDefaultBehaviour.SelectionColor


## Синтаксис


		SelectionColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство SelectionColor определяет
 цвет выделенных ячеек.


## Комментарии


Цвет выделенных ячеек может быть задан с прозрачностью или без неё.
 Для создания цвета с прозрачностью используйте конструктор [GxColor.CreateARGB](ModDrawing.chm::/Class/GxColor/GxColor.CreateARGB.htm).
 Если в качестве значения компоненты прозрачности A будет задано значение
 255, то при выделении ячеек в таблице будет использоваться степень прозрачности
 по умолчанию.


При использовании других конструкторов или статических методов класса
 [GxColor](ModDrawing.chm::/Class/GxColor/GxColor.htm)
 будет создан цвет без компоненты прозрачности. При этом будет использоваться
 то значение прозрачности, которое уже задано в настройках репозитория.


## Пример


Использование свойства приведено в примере для метода [IDefaultBehaviour.SelectionBorderColor](IDefaultBehaviour.SelectionBorderColor.htm).


См. также:


[IDefaultBehaviour](IDefaultBehaviour.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
