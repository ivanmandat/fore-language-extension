# IMetabasePolicy.ReportStamp

IMetabasePolicy.ReportStamp
-


# IMetabasePolicy.ReportStamp


## Синтаксис


ReportStamp(Locale:[LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)):
 String;


## Параметры


Locale. Идентификатор языка
 и региональных параметров. Параметр не должен принимать значение «None».


## Описание


Свойство ReportStamp определяет
 вид штампа, которым маркируются документы.


## Комментарии


Свойство отвечает за содержимое штампа, который выводится в нижнем правом
 углу на последнем листе документа: Отпечатано:, ФИО и тел.:, Подразделение,
 тип, уч., Экземпляров: <количество>, Листов в экземпляре: <количество
 страниц>, Дата.


Свойство актуально только при использовании [мандатного
 метода разграничения доступа](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Isa: IMetabaseUser;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Активируем использование мандатного метода разграничения доступа

    Policy.MandatoryAccessControl := True;

    // Зададим штамп маркировки

    Policy.ReportStamp(LocaleCodeID.Russian) := "Подразделение, тип, уч. &[DEPARTMENT]" + #13 + #10 +

                                                "Экземпляров: &[TOTAL_COPIES]" + #13 + #10 +

                                                "Листов в экземпляре: &[SHEETS_PER_COPY]";

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет активировано
 использование мандатного метода и установлен вид штампа для русского языка.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
