# IRubricatorFactData.IsTemporary

IRubricatorFactData.IsTemporary
-


# IRubricatorFactData.IsTemporary


## Синтаксис


IsTemporary: Boolean;


## Описание


Свойство IsTemporary возвращает
 признак того, что данные принадлежат временному ряду, который не существует,
 но возможен.


## Комментарии


Несуществующие, но возможные временные ряды – это ряды, разницей между
 декартовым произведением всех атрибутов базы данных временных рядов и
 существующими временными рядами.


Допустимые значения:


	- True. Данные принадлежат
	 временному ряду, который не существует, но возможен;


	- False. Данные принадлежат
	 существующему временному ряду.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки, компонента MetaAttributesTreeList с идентификатором «MetaAttributesTreeList1».
 К данному компоненту должен быть подключен компонент MetaAttributesBreadcrumb
 с идентификатором «MetaAttributesBreadcrumb1». MetaAttributesBreadcrumb1
 должен быть настроен на работу с базой данных временных рядов.


Пример будет выполняться при нажатии на кнопку. Перед выполнением примера
 в компоненте MetaAttributesTreeList1 необходимо выбрать один показатель
 и включить отображение пустых папок.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    memb: IMetaMember;

    RubInst: IRubricatorInstance;

    FactData: IRubricatorFactData;

    Revi: IRubricatorRevision;

Begin

    Memb := MetaAttributesTreeList1.SelectedMembers.Current;

    RubInst := MetaAttributesBreadcrumb1.Rubricator;

    Revi := RubInst.OpenRevision("GetMemberFactData");

    FactData := RubInst.GetMemberFactData(Memb, DictionaryGetDataOptions.None);

    If FactData.IsTemporary Then

        Debug.WriteLine("Показатель не существует");

    Else

        Debug.WriteLine("Ключ показателя: " + FactData.FactorKey.ToString);

    End If;

End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведен ключ выделенного
 показателя, если показатель существует.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
