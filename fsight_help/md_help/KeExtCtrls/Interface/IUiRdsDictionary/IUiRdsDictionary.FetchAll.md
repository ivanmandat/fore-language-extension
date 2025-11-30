# IUiRdsDictionary.FetchAll

IUiRdsDictionary.FetchAll
-


# IUiRdsDictionary.FetchAll


## Синтаксис


FetchAll: Boolean;


## Описание


Свойство FetchAll определяет,
 загружать ли в кеш значения системных и пользовательских атрибутов справочника
 НСИ вместе.


## Комментарии


Допустимые значения:


	- True. В кеш вместе с
	 значениями системных атрибутов загружаются (или будут подгружены)
	 значения пользовательских атрибутов. Открытие справочника будет занимать
	 больше времени, но увеличится скорость работы с элементами справочника.


	- False. Значение по умолчанию.
	 В кеш загружаются значения только системных атрибутов. Если были загружены
	 значения пользовательских атрибутов, то они будут очищены. Открытие
	 справочника будет занимать меньше времени, но уменьшится скорость
	 работы с элементами справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO, содержащего справочник с идентификатором OBJ_DICT. Также предполагается
 наличие формы, на которой расположены кнопка с наименованием Button1 и
 компонент UiRdsDictionary с наименованием UiRdsDictionary1, являющийся
 источником данных для компонента RdsDictionaryBox.


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    RdsDescr: IMetabaseObjectDescriptor;

	    Dict: IRdsDictionary;

	Begin

	    UiRdsDictionary1.Active := False;

	    MB := MetabaseClass.Active;

	    RdsDescr := MB.ItemById("RDS_REPO");

	    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

	    UiRdsDictionary1.Object := Dict;

	    UiRdsDictionary1.FetchAll := True;

	    UiRdsDictionary1.Active := True;

	End Sub Button1OnClick;


При нажатии на кнопку в компоненте RdsDictionaryBox будет открыт
 справочник OBJ_DICT. В кеш вместе со значениями системных атрибутов справочника
 будут загружены и значения пользовательских атрибутов.


См. также:


[IUiRdsDictionary](IUiRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
