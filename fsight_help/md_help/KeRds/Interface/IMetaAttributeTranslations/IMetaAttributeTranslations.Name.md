# IMetaAttributeTranslations.Name

IMetaAttributeTranslations.Name
-


# IMetaAttributeTranslations.Name


## Синтаксис


Name(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 String;


## Параметры


Locale.
 Уникальный идентификатор языка перевода.


## Описание


Свойство Name определяет перевод
 наименования атрибута.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Metabase, Cubes, Rds.


	Class TestForm: Form

	    Button1: Button;

	    Button2: Button;

	    Button3: Button;

	    Button4: Button;

	    Mb: IMetabase;

	    Mobj: IMetabaseObject;

	    TSDB: IMetaDictionary;

	    Attr: IMetaAttribute;

	    MDT: IMetaDictionaryTranslations;


	    Sub OBJ1466FormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        Mb := MetabaseClass.Active;

	        Mobj:= MB.ItemById("TSDB").Bind;

	    End Sub OBJ1466FormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var Rubr: IRubricator;

	    Begin

	        Rubr := Mobj.Edit As IRubricator;

	        TSDB := Rubr.EditFacts;

	        MDT := TSDB.Translations;

	        MDT.IsOn := True;

	        MDT.AddLocale(LocaleCodeID.English);

	        MDT.AddLocale(LocaleCodeID.Japanese);

	        MDT.AddLocale(LocaleCodeID.French_France);

	        (Rubr as IMetabaseObject).Save;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var Rubr: IRubricator;

	    Begin

	        Rubr := Mobj.Edit As IRubricator;

	        TSDB := Rubr.EditFacts;

	        MDT := TSDB.Translations;

	        MDT.IsOn := True;

	        MDT.RemoveLocale(LocaleCodeID.English);

	        (Rubr as IMetabaseObject).Save;

	    End Sub Button2OnClick;


	    Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var Rubr: IRubricator;

	    Begin

	        Rubr := Mobj.Edit As IRubricator;

	        TSDB := Rubr.EditFacts;

	        MDT := TSDB.Translations;

	        MDT.IsOn := True;

	        MDT.RemoveAllLocales;

	        (Rubr as IMetabaseObject).Save;

	    End Sub Button3OnClick;


	    Sub Button4OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var Rubr: IRubricator;

	    Begin

	        Rubr := Mobj.Edit As IRubricator;

	        TSDB := Rubr.EditFacts;

	        Attr := TSDB.Attributes.FindById("Key");

	        Attr.Translations.Name(LocaleCodeID.French_France) := "Clef";

	        (Rubr as IMetabaseObject).Save;

	    End Sub Button4OnClick;

	End Class TestForm;


	rh-droptext_end ?>


После нажатия на кнопку с наименованием «Button1»
 в коллекции настроек появятся настройки для английского, французского
 и японского языков. После нажатия на кнопку с наименованием «Button2»
 из коллекции будет удален английский язык. После нажатия на кнопку с наименованием
 «Button3» из коллекции будут
 удалены все языки кроме того, на котором была создана база данных временных
 рядов. После нажатия на кнопку с наименованием «Button4»
 наименование атрибута с идентификатором Key во французском языке будет
 переведено как Сlef.


См. также:


[IMetaAttributeTranslations](IMetaAttributeTranslations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
