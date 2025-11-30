# SelectSecSubject

SelectSecSubject
-


# Команда SelectSecSubject


## Назначение


Вызов стандартного диалога выбора субъектов безопасности.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMetabaseSecurity](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.htm)
		 Менеджер безопасности репозитория, посредством которого будет
		 строится список субъектов безопасности.


		 Элемент 2: [SecuritySubjectType](KeSom.chm::/Enums/SecuritySubjectType.htm)
		 Тип субъектов безопасности, которые будут доступны для выбора
		 в диалоге.


		 Элемент 3: [SecuritySubjectLocation](KeSom.chm::/Enums/SecuritySubjectLocation.htm)
		 Вариант размещения субъектов безопасности, которые будут доступны
		 для выбора.


## Особенности применения


После выполнения метода [Execute](../IUiCommandTarget.Execute.htm),
 при корректном списке субъектов безопасности в диалоге и при нажатии кнопки
 "ОК", метод вернет массив. В каждом элементе массива будет содержаться
 один выбранный субъект безопасности.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1". В репозитории имеется
 табличный справочник с идентификатором "Dim_1". Метки безопасности
 справочника сопоставлены двум субъектам по умолчанию (Пользователь Admin
 и группа Администраторы). В диалоге предполагается выбор менее 32 субъектов
 безопасности.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Sec: IMetabaseSecurity;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Params: Array[0..2];

	    SubType: SecuritySubjectType;

	    SubLoc: SecuritySubjectLocation;

	    SS: ISecuritySubject;

	    Res: Variant;

	    v: Array;

	    i, j: Integer;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Std");

	    Context := Target.CreateExecutionContext;

	    Sec := MB.Security;

	    SubType := SecuritySubjectType.User;

	    SubLoc := SecuritySubjectLocation.DbUsers;

	    //Указываем параметры для диалога

	    Params[0] := Sec;

	    Params[1] := SubType;

	    Params[2] := SubLoc;

	    Context.Data := Params;

	    //Инициализация диалога

	    Res := Target.Execute("SelectSecSubject", Context);

	    //Если ОК - сопоставляем свободным меткам безопасности

	    If Not Res.IsNull Then

	        MDesc := MB.ItemById("Dim_1");

	        SecDesc := MDesc.SecurityDescriptor;

	        SecDesc.Edit;

	        SecLab := SecDesc.LabelSecurity;

	    v := Res As Array;

	    For i := 0 To SecLab.BitCount - 1 Do

	        If SecLab.Mapping(i) = Null Then

	                SS := v[j] As ISecuritySubject;

	                SecLab.Mapping(i) := SS;

	                j := j + 1;

	            End If;

	            If j >= v.Length Then

	                Break;

	            End If;

	        End For;

	        SecDesc.Apply(False);

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет инициализирован
 диалог выбора субъектов безопасности. В диалоге будет доступен выбор пользователей,
 созданных в рамках текущего репозитория. После выбора пользователей и
 нажатия кнопки "ОК", данные субъекты безопасности будут сопоставлены
 свободным меткам безопасности справочника.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
