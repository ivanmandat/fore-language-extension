# IDynamicInstance.LoaderBlockSize

IDynamicInstance.LoaderBlockSize
-


# IDynamicInstance.LoaderBlockSize


## Синтаксис


LoaderBlockSize: Integer;


## Описание


Свойство LoaderBlockSize определяет
 размер блока загружаемых элементов справочника.


## Комментарии


При динамической загрузке элементы справочника загружаются блоками.
 При необходимости загрузить новые элементы загружается очередной блок
 с указанным размером.


Установить значение свойства можно только при создании справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDimInstance;

    Debug.WriteLine("Размер блока
 загружаемых элементов: " + Dim.LoaderBlockSize.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 блока загружаемых элементов справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
