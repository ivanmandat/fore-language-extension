# Динамическое изменение пиктограммы формы

Динамическое изменение пиктограммы формы
-


# Динамическое изменение пиктограммы формы


Любая форма, являясь окном операционной системы, имеет собственную пиктограмму.
 По умолчанию любая форма, созданная в среде разработки продукта «Форсайт. Аналитическая платформа»,
 использует системную пиктограмму. Для задания собственной пиктограммы
 используется свойство [IFormControl.Icon](../Interface/IFormControl/IFormControl.Icon.htm).
 В режиме дизайнера формы нажмите кнопку ![](../Interface/knopka_dialog.gif) в инспекторе
 классов напротив свойства [Icon](../Interface/IFormControl/IFormControl.Icon.htm) и
 выберите необходимую пиктограмму. Для выбора доступны файлы только в формате
 *.ico. Во время выполнения формы
 пиктограмму можно изменить из прикладного кода. Для сброса собственной
 и установки системной пиктограммы установите свойству [Icon](../Interface/IFormControl/IFormControl.Icon.htm)
 значение Null.


Рассмотрим несколько примеров установки собственной пиктограммы из кода
 приложения.


## Загрузка из компонента ImageList


Если на форме имеется компонент [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm) ([GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm)),
 то загрузить из него собственную пиктограмму можно, используя свойство
 [IImageList.Icon](../Interface/IImageList/IImageList.Icon.htm).
 Если в компонент загружены изображения другого формата, то при работе
 они будут преобразованы к формату *.ico.


	Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	Begin

	    Self.Icon := ImageList1.Icon(0);

	End Sub TESTFormOnCreate;


## Загрузка из ресурсов


Для получения пиктограммы из объекта «[Ресурсы](UiNav.chm::/Multilanguage/Resources.htm)»
 используйте свойства [IResourceBinaries.Value](ModIo.chm::/Interface/IResourceBinaries/IResourceBinaries.Value.htm),
 [IResourceBinaries.ValueByKey](ModIo.chm::/Interface/IResourceBinaries/IResourceBinaries.ValueByKey.htm)
 или метод [IResourceBinaries.Load](ModIo.chm::/Interface/IResourceBinaries/IResourceBinaries.Load.htm).
 После получения пиктограммы в виде потока передайте этот поток в конструктор
 [GxIcon.CreateFromStream](ModDrawing.chm::/Class/GxIcon/GxIcon.CreateFromStream.htm)
 или [GxIcon.CreateFromStreamS](ModDrawing.chm::/Class/GxIcon/GxIcon.CreateFromStreamS.htm).
 Созданную таким образом пиктограмму установите для формы:


	Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	Var

	    MB: IMetabase;

	    Res: IResourceObject;

	Begin

	    MB := MetabaseClass.Active;

	    Res := MB.ItemById("Project_Resources").Bind As IResourceObject;

	    Self.Icon := New GxIcon.CreateFromStream(Res.Binaries.Value("FORM_ICON"));

	End Sub TESTFormOnCreate;


## Загрузка пиктограммы из файла


Для загрузки пиктограммы из файла используйте метод [GxIcon.CreateFromFile](ModDrawing.chm::/Class/GxIcon/GxIcon.CreateFromFile.htm)
 или [GxIcon.CreateFromFileS](ModDrawing.chm::/Class/GxIcon/GxIcon.CreateFromFileS.htm):


	Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	Var

	    Size: IGxSize;

	Begin

	    Size := New GxSize.Create(16, 16);

	    Self.Icon := New GxIcon.CreateFromFileS("C:\Work\Images\Form_Icon.ico", Size);

	End Sub TESTFormOnCreate;


См. также:


[Примеры](ModForms_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
