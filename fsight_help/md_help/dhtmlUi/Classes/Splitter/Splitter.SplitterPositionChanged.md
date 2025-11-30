# Splitter.SplitterPositionChanged

Splitter.SplitterPositionChanged
-


# Splitter.SplitterPositionChanged


## Синтаксис


SplitterPositionChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргумент Position возвращает
 текущую позицию разделителя.


## Описание


Событие SplitterPositionChanged
 наступает после изменения позиции разделителя.


## Комментарии


Для наступления события необходимо, чтобы для свойства [EnableResize](Splitter.EnableResize.htm)
 было установлено значение true
 (значение по умолчанию).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Splitter](Splitter.htm) с наименованием «splitter» (см. «[Пример создания
 компонента Splitter](../../Components/Splitter/Example_Splitter.htm)»).


splitter.SplitterPositionChanged.add(function (sender, args)


{


   alert(args.Position)


})


После изменения позиции разделителя на экран будет выдаваться сообщение
 с информацией о текущей позиции разделителя.


 См. также:


[Splitter](Splitter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
