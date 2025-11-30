# IMetabaseObject.EditRequiresAdditionalLicense

IMetabaseObject.EditRequiresAdditionalLicense
-


# IMetabaseObject.EditRequiresAdditionalLicense


## Синтаксис


EditRequiresAdditionalLicense:
 String;


## Описание


Свойство EditRequiresAdditionalLicense
 определяет наименование [прикладной
 единицы лицензирования](Setup.chm::/08_Licensing/ApplicationSystemLicensing.htm) для защиты объектов репозитория
 от редактирования.


## Комментарии


Защита от редактирования доступна для объектов репозитория: ресурсы,
 сборка, форма, модуль.


По умолчанию свойство принимает значение Null.
 Если значение свойства задано, то при редактировании объекта репозитория
 дополнительно проверяется наличие прикладной единицы лицензирования с
 соответствующим наименованием.


Для просмотра доступных единиц лицензирования используйте [менеджер
 лицензий](Setup.chm::/08_Licensing/RMS/Intro_LicenseManager.htm), окно «[О программе](UiNav.chm::/GUI/Info.htm)»
 или метод [ILicenseManager.GetAllFeatures](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.GetAllFeatures.htm).


Особенности использования свойства:


	- при изменении значения свойства проверьте наличие текущей прикладной
	 единицы лицензирования до изменения и задаваемой прикладной единицы
	 лицензирования;


	- наименование прикладной единицы лицензирования должно отличаться
	 от наименований существующих [единиц лицензирования](Setup.chm::/08_Licensing/AboutFeatures.htm);


	- прикладная единица лицензирования заказывается и генерируется
	 отдельно.


Также для настройки защиты объектов репозитория от редактирования используйте
 окно «[Защита объектов от редактирования](UiDevEnv.chm::/01_Development_Environment/Objects_protection.htm)».


Для работы с прикладными единицами лицензирования обратитесь к статье
 «[Защита
 прикладных систем](Setup.chm::/08_Licensing/ApplicationSystemLicensing.htm)».


## Пример


Для выполнения примера предполагается наличие формы с [компонентами](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/Accomodation_component_on_form.htm):


	- [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm). Кнопка
	 с наименованием Button1 для получения наименования прикладной единицы
	 лицензирования и кнопка Button2 для защиты объектов репозитория от
	 редактирования;


	- [EditBox](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/EditBox.htm). Компонент
	 с наименованием EditBox1 для ввода идентификатора объекта и компонент
	 EditBox2 для ввода/вывода наименования прикладной единицы лицензирования.


Добавьте ссылки на системные сборки: Metabase, Forms.


Пример является обработчиком события OnClick для компонента Button1
 и Button2.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Obj: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    Obj := Mb.ItemById(EditBox1.Text);

    EditBox2.Text := Obj.Bind.EditRequiresAdditionalLicense;

End Sub Button1OnClick;


Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Obj: IMetabaseObjectDescriptor;

    Lic: IMetabaseObject;

Begin

    Mb := MetabaseClass.Active;

    Obj := Mb.ItemById(EditBox1.Text);

    Lic := Obj.Edit;

    Lic.EditRequiresAdditionalLicense := EditBox2.Text;

    Lic.Save;

End Sub Button2OnClick;


После выполнения примера введите идентификатор объекта репозитория в
 компоненте EditBox1 и нажмите кнопку Button1. Будет получено наименование
 прикладной единицы лицензирования и отображено в компоненте EditBox2,
 если объект защищен от редактирования. Если объект не защищен от редактирования
 прикладной единицей лицензирования, то для защиты введите в компонент
 EditBox2 наименование прикладной единицы лицензирования и нажмите кнопку
 Button2. Заданный объект репозитория будет защищен от редактирования прикладной
 единицей лицензирования.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
