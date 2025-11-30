# ILanerBox.DisabledManagedOptions

ILanerBox.DisabledManagedOptions
-


# ILanerBox.DisabledManagedOptions


## Синтаксис


DisabledManagedOptions: [LanerBoxManagedOptions](../../Enums/LanerBoxManagedOptions.htm);


## Описание


Свойство DisabledManagedOptions
 определяет, использовать ли настройки, заданные для компонента LanerBox.


## Комментарии


Значение DisabledManagedOptions
 необходимо задавать до установки источника данных для компонента.
 По умолчанию LanerBox использует
 свои настройки, а не настройки источника данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1» и компонента LanerBox с наименованием «LanerBox1». «UiErAnalyzer1»
 является источником данных для «LanerBox1». В репозитории содержится рабочая
 книга с идентификатором WB_LANER.


Добавьте ссылку на системную сборку Metabase.


Пример является обработчиком события OnClick для «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    WbObj: IMetabaseObjectDescriptor;

	Begin

	    UiErAnalyzer1.Active := False;

	    LanerBox1.DisabledManagedOptions := LanerBoxManagedOptions.LanerEndDate Or LanerBoxManagedOptions.LanerStartDate;

	    Mb := MetabaseClass.Active;

	    WbObj := mb.ItemById("WB_LANER");

	    UiErAnalyzer1.Object := WbObj;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick;


После выполнения примера в «LanerBox1» будет загружена рабочая книга
 WB_LANER. Период отображения данных определяется настройками загруженной
 рабочей книги, а не компонента «LanerBox1».


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
