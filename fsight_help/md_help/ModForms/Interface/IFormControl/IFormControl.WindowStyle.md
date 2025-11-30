# IFormControl.WindowStyle

IFormControl.WindowStyle
-


# IFormControl.WindowStyle


## Синтаксис


WindowStyle: [FormWindowStyle](../../Enums/FormWindowStyle.htm);


## Описание


Свойство WindowStyle определяет
 стиль формы.


## Комментарии


Стиль, установленный в данном свойстве, определяет режим работы формы.
 По умолчанию свойству WindowStyle
 установлено значение [FormWindowStyle.Normal](../../Enums/FormWindowStyle.htm),
 при этом создается обычная форма. При запуске обычная форма является отдельным
 окном операционной системы.


При разработке многооконного MDI-приложения необходимо определить главную
 и дочерние MDI-формы. Для главной MDI-формы в свойстве WindowStyle
 установите значение [FormWindowStyle.MDIFrame](../../Enums/FormWindowStyle.htm),
 для всех дочерних MDI-форм - [FormWindowStyle.MDIChild](../../Enums/FormWindowStyle.htm).
 На главной MDI-форме могут использоваться только следующие компоненты:
 [BannerBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/BannerBar.htm),
 [ControlBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ControlBar.htm),
 [MainMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/MainMenu.htm),
 [ReportFormulaBar](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportFormulaBar.htm),
 [Ribbon](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Ribbon.htm),
 [Toolbar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ToolBar.htm).
 Дочерние MDI-формы могут содержать любые компоненты.


Примечание.
 Свойство WindowStyle может изменяться
 только на этапе проектирования формы.


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
