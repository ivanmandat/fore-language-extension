# Object.getTypeName

Object.getTypeName
-


# Object.getTypeName


## Синтаксис


getTypeName();


## Описание


Метод getTypeName возвращает
 имя типа объекта без пространства имён, к которому он принадлежит.


## Комментарии


Необходимое условие для корректной работы: если класс определён не в
 пространстве имён PP, то после определения класса, необходимо определить
 у класса статическое поле Name:


MyNamespace.Test = function(){},


MyNamespace.Name = 'Test'


Даже если класс определён в PP, для более высокой скорости работы этой
 функции желательно прописывать имя типа через статическое поле Name.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [BubbleTree](dhtmlBubbleTree.chm::/Components/BubbleTree/BubbleTree.htm)
 с наименованием «bubbleTree» (см. «[Пример
 создания компонента BubbleTree](dhtmlBubbleTree.chm::/Components/BubbleTree/BubbleTree_Example.htm)»). Определим имя объекта
 к которому он принадлежит:


console.log(bubbleTree.getTypeName());
После выполнения примера в консоль браузера будет выведен тип объекта
 «bubbleTree», к которому он принадлежит.


См. также:


[Object](Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
