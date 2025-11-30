# IControl.TabStop

IControl.TabStop
-


# IControl.TabStop


## Синтаксис


TabStop: Boolean;


## Описание


Свойство TabStop определяет признак необходимости компоненту получать фокус при нажатии кнопки TAB.


## Комментарии


Данное свойство актуально для компонентов, которые имеют визуальный редактор значения и могут получить фокус. Также свойство доступно для компонентов-контейнеров. Изменение значения свойства для компонента-контейнера не влияет на данное свойство компонентов, расположенных на нем.


Для следующих компонентов свойство не поддерживается и всегда имеет значение False:


-
[Label](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Label.htm);


-
[Hyperlink](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Hyperlink.htm);


-
[Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm);


-
[ProgressBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ProgressBar.htm);


-
[Bevel](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Bevel.htm);


-
[Toolbar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Toolbar.htm);


-
[ImageBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageBox.htm);


-
[StatusBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/StatusBar.htm);


-
[BannerBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/BannerBar.htm);


-
[Ribbon](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Ribbon.htm)


См.также:


[IControl](IControl.htm) | [IControl.TabOrder](IControl.TabOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
