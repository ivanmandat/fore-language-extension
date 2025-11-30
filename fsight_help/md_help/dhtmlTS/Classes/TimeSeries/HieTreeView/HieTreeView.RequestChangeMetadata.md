# HieTreeView.RequestChangeMetadata

HieTreeView.RequestChangeMetadata
-


# HieTreeView.RequestChangeMetadata


## Синтаксис


RequestChangeMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestChangeMetadata
 наступает при запросе на изменение метаданных иерархии рядов.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, создать компонент для отображения иерархии каталога показателей
 с наименованием «maTree» (см. «[Конструктор
 MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)») и в теге <SCRIPT> добавить следующий код:


maTree.RequestChangeMetadata.add(function(sender, args){console.log("Изменение метаданных иерархии")})


После выполнения примера при смене варианта фильтрации (команда контекстного
 меню временного ряда «Скрыть») будет сгенерировано событие RequestChangeMetadata,
 при этом в консоль браузера будет выведено соответствующее сообщение.


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
