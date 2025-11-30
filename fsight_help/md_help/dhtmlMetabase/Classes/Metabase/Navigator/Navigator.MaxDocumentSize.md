# Navigator.MaxDocumentSize

Navigator.MaxDocumentSize
-


# Navigator.MaxDocumentSize


## Синтаксис


MaxDocumentSize: Number;


## Описание


Свойство MaxDocumentSize определяет
 максимальный размер загружаемого документа.


## Комментарии


Размер файла указывается в байтах.


Значение свойства устанавливается из JSON и с помощью метода setMaxDocumentSize,
 а возвращается с помощью метода getMaxDocumentSize.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Ограничим максимальный размер загружаемого
 файла:


nav.setMaxDocumentSize(1024);
После выполнения примера при попытке добавить в репозиторий документ,
 имеющий вес более 1024 байт, будет выведено предупреждающее окно.


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
