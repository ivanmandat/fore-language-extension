# IRdsDictionaryInstance.ShowHidden

IRdsDictionaryInstance.ShowHidden
-


# IRdsDictionaryInstance.ShowHidden


## Синтаксис


ShowHidden: Boolean;


## Описание


Свойство ShowHidden определяет,
 включать ли скрытые элементы в данные справочника.


## Комментарии


Допустимые значения:


	- True. Скрытые элементы
	 включаются в данные справочника;


	- False.
	 Значение по умолчанию. Скрытые элементы не включаются в данные справочника.


Получить данные справочника на основе текущего набора элементов позволяет
 метод [IRdsDictionaryInstance.CreateDimInstance](IRdsDictionaryInstance.CreateDimInstance.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором «Button1» и компонент UiDimension
 с идентификатором «UiDimension1». «UiDimension1» является источником данных
 для компонента DimensionTree.
 Также должен существовать репозиторий НСИ с идентификатором «RDS_REPO»,
 содержащий справочник с идентификатором «OBJ_DICT».


Для корректного выполнения примера необходимо добавить ссылки на системные
 сборки «Metabase», «Rds». Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    RdsDescr: IMetabaseObjectDescriptor;

    DictDescr: IMetabaseObjectDescriptor;

    RdsI: IRdsDictionaryInstance;

Begin

    Mb := MetabaseClass.Active;

    Mb.Cache.FlushAll;

    RdsDescr := Mb.ItemById("RDS_REPO");

    DictDescr := Mb.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key);

    RdsI := DictDescr.Open(Null) As IRdsDictionaryInstance;

    RdsI.ShowHidden := True;

    UiDimension1.Instance := RdsI.CreateDimInstance;

End Sub Button1OnClick;


После выполнения примера в элементе DimensionTree
 будут отображены данные справочника «OBJ_DICT» вместе со скрытыми элементами.


См. также:


[IRdsDictionaryInstance](IRdsDictionaryInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
