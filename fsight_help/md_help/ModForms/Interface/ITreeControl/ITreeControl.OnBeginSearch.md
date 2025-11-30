# ITreeControl.OnBeginSearch

ITreeControl.OnBeginSearch
-


# ITreeControl.OnBeginSearch


## Синтаксис


OnBeginSearch(Sender: Object; Args: [ITreeSearchEventArgs](../ITreeSearchEventArgs/ITreeSearchEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeginSearch наступает
 в момент начала поиска элементов в компоненте.


## Комментарии


Событие OnBeginSearch наступает
 после окончания набора символов в момент начала поиска. Используя свойство
 [SearchText](../ITreeSearchEventArgs/ITreeSearchEventArgs.SearchText.htm)
 аргумента события можно получить текст, по которому ищутся элементы.


## Пример


Пример использования приведен в описании события [OnSearch](ITreeControl.OnSearch.htm).


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
