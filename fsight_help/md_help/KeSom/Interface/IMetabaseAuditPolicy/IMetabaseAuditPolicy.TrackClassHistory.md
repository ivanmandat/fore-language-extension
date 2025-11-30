# IMetabaseAuditPolicy.TrackClassHistory

IMetabaseAuditPolicy.TrackClassHistory
-


# IMetabaseAuditPolicy.TrackClassHistory


## Синтаксис


		TrackClassHistory(ClassID: Integer): Integer;


## Параметры


ClassId. Класс
 объекта. Для указания класса объекта используйте перечисление [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Описание


Свойство TrackClassHistory определяет
 маску операций, для которых будет вестись история.


## Комментарии


Ведение истории доступно только по трем операциям: изменение, изменение
 прав и удаление. Для формирования и проверки значения маски используйте
 перечисление [MetabaseObjectPredefinedRights](../../Enums/MetabaseObjectPredefinedRights.htm).
 Для разбора значения маски реализуйте пользовательскую функцию, которая
 позволит сопоставить отдельные биты маски соответствующим значениям перечислений.
 Пример работы с маской доступа представлен в разделе «[Работа
 с маской доступа](../../Examples/Example_2_AccessMask.htm)».


## Пример


Для выполнения примера добавьте системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    AuditPolicy: IMetabaseAuditPolicy;

		    MBClass: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    AuditPolicy := MS.Policy.AuditPolicy;

		    MBClass := MetabaseObjectClass.KE_CLASS_FOLDER;

		    Debug.WriteLine(AuditPolicy.TrackClassHistory(MBClass));

		End Sub UserProc;


После выполнения примера в консоль будет выведено значение, определяющее
 операции над папками, для которых добавляются записи в протокол доступа.


См. также:


[IMetabaseAuditPolicy](IMetabaseAuditPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
