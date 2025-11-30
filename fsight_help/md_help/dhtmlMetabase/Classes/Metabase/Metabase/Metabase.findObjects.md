# Metabase.findObjects

Metabase.findObjects
-


# Metabase.findObjects


## Синтаксис


findObjects (parentKey, filter, callback, errorCallback)


## Параметры


parentKey. Ключ папки, в которой
 будет осуществляться поиск объекта;


filter. JSON-объект с параметрами
 поиска;


callback. Процедура обратного
 вызова;


errorCallback. Процедура обратного
 вызова при ошибке.


## Описание


Метод findObjects находит объекты
 репозитория по заданным параметрам.


## Комментарии


Для JSON-объекта параметра filter
 доступны следующие параметры:


	- Levels. Тип параметра:
	 Integer. Уровень вложенности папок репозитория, среди которых будет
	 произведен поиск;


	- IncludeRoot. Тип параметра:
	 Boolean. Включать в поиск корневую папку;


	- HideEmptyFolders. Тип
	 параметра: Boolean. Скрывать папки, если они не содержат результатов
	 поиска;


	- HideAllFolders. Тип
	 параметра: Boolean. Не отображать папки;


	- Limit. Тип параметра:
	 Integer. Максимальное количество объектов, которые будут включены
	 в результат поиска;


	- HiddenContainers. Тип
	 параметра: Boolean. Не отображать перечисленные в данном атрибуте
	 контейнеры;


	- FindInfo. Дополнительные
	 параметры поиска:


		- Active. Тип параметра:
		 Boolean. Признак использования дополнительных параметров поиска;


		- Text. Тип параметра:
		 String. Наименование или идентификатор объекта;


		- Attribute. Тип параметра:
		 [PP.Mb.FindInfoAttribute](../../../Enums/FindInfoAttribute.htm).
		 Атрибут поиска;


		- CaseSensitive. Тип
		 параметра: Boolean. Чувствительность регистра;


		- WholeWordsOnly.
		 Тип параметра: Boolean. Поиск слов целиком;


		- ScanNestedNamespaces.
		 Тип параметра: Boolean. Поиск во вложенных объектах;


		- ScanHiddenFolders.
		 Тип параметра: Boolean. Поиск в скрытых папках;


		- ClassId. Тип параметра:
		 Integer. Класс объектов, среди которых будет производиться поиск.
		 По умолчанию поиск производится среди всех объектов репозитория;


	- Classes. Тип параметра:
	 Array. Массив классов объектов, среди которых будет производиться
	 поиск;


	- Containers. Тип параметра:
	 Array. Массив классов объектов, которые будут рассматриваться как
	 контейнеры.


## Пример


Для выполнения примера предполагается наличие на странице соединения
 с репозиторием с наименованием «mb» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Выведем в консоль браузера массив
 описаний объектов, удовлетворяющих условиям поиска:


mb.findObjects(0, {
    Filter: {
        FindInfo: {
            Active: true,
            Text: "FindMe",
            Attribute: PP.Mb.FindInfoAttribute.Name,
        }
    }
}, function (sender, args) {
    var loadedObjects = JSON.parse(args.ResponseText).GetObjectsResult.objects;
    console.log(loadedObjects.its);
})

После выполнения примера в консоль браузера будет выведен массив описаний
 объектов, в названии которых встречается сочетание символов «FindMe».


См. также:


[Metabase](Metabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
