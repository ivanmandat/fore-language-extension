# IRdsDictionaryElement.DeleteRaw

IRdsDictionaryElement.DeleteRaw
-


# IRdsDictionaryElement.DeleteRaw


## Синтаксис


DeleteRaw(Options: [DeleteDictionaryElementOptions](../../Enums/DeleteDictionaryElementOptions.htm));


## Параметры


Options. Опции удаления элементов.


## Описание


Метод DeleteRaw осуществляет
 удаление текущего элемента в соответствии с заданными опциями удаления.


## Комментарии


Указанные опции удаления также применяются ко всем дочерним элементам.


## Пример


Для выполнения примера предполагается наличие в репозитории репозитория
 НСИ с идентификатором «RDS». В данном репозитории создан справочник НСИ
 с идентификатором «Country». Для справочника включено отслеживание ссылок
 на элементы.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    Elements: IRdsDictionaryElements;

    Element: IRdsDictionaryElement;

Begin

    MB := MetabaseClass.Active;

    Dict := MB.ItemByIdNamespace("Country", MB.GetObjectKeyById("RDS")).Bind As IRdsDictionary;

    Elements := (Dict.Open(Null) As IRdsDictionaryInstance).Elements;

    Element := Elements.Item(1);

    Element.DeleteRaw(DeleteDictionaryElementOptions.ForceDeleteDependents);

End Sub UserProc;


При выполнении примера будет удален указанный элемент справочника НСИ.
 Если от этого элемента зависят какие-либо объекты репозитория, то зависимости
 объектов также будут удалены.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
