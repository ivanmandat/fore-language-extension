# Изменение прав доступа к объекту: Операция SetMbSec

Изменение прав доступа к объекту: Операция SetMbSec
-


**


# Изменение прав доступа к объекту


Ниже приведён пример использования операции [SetMbSec](../SetMbSec.htm)
 для изменения прав доступа к объекту. В запросе передается список субъектов
 безопасности и их права доступа к объекту. Для описания безопасности устанавливается
 флаг обновления. В ответе приходит обновленное описание безопасности объекта.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)» и функция GetObjectSecurityDescriptor,
 код которой приведен в примере «[Получение
 описания безопасности объектов](../GetMbSec_Sample/GetMbSec_Sample2.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../../minus.gif)](../../../#)<SetMbSec
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../../minus.gif)](../../../#)<tMbSec xmlns="** **">


						  <id>S1!M</id>


					  </tMbSec>


					[![](../../../minus.gif)](../../../#)<tArg xmlns="** **">


						[![](../../../minus.gif)](../../../#)<pattern>


							  <objects>true</objects>


						  </pattern>


						[![](../../../minus.gif)](../../../#)<meta>


							[![](../../../minus.gif)](../../../#)<objects>


								[![](../../../minus.gif)](../../../#)<ods>


									[![](../../../minus.gif)](../../../#)<its>


										[![](../../../minus.gif)](../../../#)<d
										 isShortcut="**false**" isLink="**false**" hf="**false**">


											  <i>OBJ2</i>


											  <n>obj2</n>


											  <k>535</k>


											  <c>1537</c>


											  <p>533</p>


											  <h>false</h>


											  <sdKey>544</sdKey>


											  <hasPrv>false</hasPrv>


											  <ic>false</ic>


										  </d>


									  </its>


								  </ods>


								[![](../../../minus.gif)](../../../#)<sds>


									[![](../../../minus.gif)](../../../#)<its>


										[![](../../../minus.gif)](../../../#)<it>


											  <k>544</k>


											  <isInherited>false</isInherited>


											  <isSealed>false</isSealed>


											[![](../../../minus.gif)](../../../#)<discrete>


												[![](../../../minus.gif)](../../../#)<aces>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>2147483649</k>


															  <id>АДМИНИСТРАТОРЫ</id>


															  <n>АДМИНИСТРАТОРЫ</n>


															  <vis>true</vis>


															  <type>Group</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-2-1</sid>


																  <type>Group</type>


															  </sid>


														  </subject>


														  <allow>1</allow>


													  </it>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>2147483649</k>


															  <id>ADMIN</id>


															  <vis>true</vis>


															  <type>User</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-1-1</sid>


																  <type>User</type>


															  </sid>


														  </subject>


														  <allow>1</allow>


													  </it>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>545</k>


															  <id>NEWADMIN</id>


															  <n>NewAdmin</n>


															  <vis>true</vis>


															  <type>User</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-1-545</sid>


																  <type>User</type>


															  </sid>


														  </subject>


														  <allow>98312</allow>


														  <deny>16</deny>


														  <audit>98312</audit>


													  </it>


												  </aces>


											  </discrete>


											[![](../../../minus.gif)](../../../#)<mandatory>


												[![](../../../minus.gif)](../../../#)<accessToken>


												  <its />


												  </accessToken>


											  </mandatory>


											  <applyFlags>0</applyFlags>


										  </it>


									  </its>


								  </sds>


							  </objects>


						  </meta>


						[![](../../../minus.gif)](../../../#)<metaGet>


							[![](../../../minus.gif)](../../../#)<pattern>


								  <objects>true</objects>


								[![](../../../minus.gif)](../../../#)<objectsFilter>


									[![](../../../minus.gif)](../../../#)<keys>


										  <i>535</i>


									  </keys>


								  </objectsFilter>


							  </pattern>


						  </metaGet>


					  </tArg>


				  </SetMbSec>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../../minus.gif)](../../../#)<soapenv:Body>


				[![](../../../minus.gif)](../../../#)<SetMbSecResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../../minus.gif)](../../../#)<id xmlns="** **">


						  <id>S1!M</id>


					  </id>


					[![](../../../minus.gif)](../../../#)<metaGet xmlns="** **">


						[![](../../../minus.gif)](../../../#)<id>


							  <id>S1!M</id>


						  </id>


						[![](../../../minus.gif)](../../../#)<meta>


							[![](../../../minus.gif)](../../../#)<objects>


								[![](../../../minus.gif)](../../../#)<ods>


									[![](../../../minus.gif)](../../../#)<its>


										[![](../../../minus.gif)](../../../#)<d
										 isShortcut="**0**" isLink="**0**" hf="**0**">


											  <i>OBJ2</i>


											  <n>obj2</n>


											  <k>535</k>


											  <c>1537</c>


											  <p>533</p>


											  <h>0</h>


											  <sdKey>546</sdKey>


											  <hasPrv>0</hasPrv>


											  <ic>0</ic>


										  </d>


									  </its>


								  </ods>


								[![](../../../minus.gif)](../../../#)<sds>


									[![](../../../minus.gif)](../../../#)<its>


										[![](../../../minus.gif)](../../../#)<it>


											  <k>546</k>


											  <isInherited>0</isInherited>


											  <isSealed>0</isSealed>


											[![](../../../minus.gif)](../../../#)<discrete>


												[![](../../../minus.gif)](../../../#)<aces>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>2147483649</k>


															  <id>АДМИНИСТРАТОРЫ</id>


															  <n>АДМИНИСТРАТОРЫ</n>


															  <vis>1</vis>


															  <type>Group</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-2-1</sid>


																  <type>Group</type>


															  </sid>


														  </subject>


														  <allow>1</allow>


													  </it>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>2147483649</k>


															  <id>ADMIN</id>


															  <vis>1</vis>


															  <type>User</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-1-1</sid>


																  <type>User</type>


															  </sid>


														  </subject>


														  <allow>1</allow>


													  </it>


													[![](../../../minus.gif)](../../../#)<it>


														[![](../../../minus.gif)](../../../#)<subject>


															  <k>545</k>


															  <id>NEWADMIN</id>


															  <n>NewAdmin</n>


															  <vis>1</vis>


															  <type>User</type>


															[![](../../../minus.gif)](../../../#)<sid>


																  <sid>PS-1-545</sid>


																  <type>User</type>


															  </sid>


														  </subject>


														  <allow>98312</allow>


														  <deny>16</deny>


														  <audit>98312</audit>


													  </it>


												  </aces>


											  </discrete>


											[![](../../../minus.gif)](../../../#)<mandatory>


												[![](../../../minus.gif)](../../../#)<accessToken>


												  <its />


												  </accessToken>


											  </mandatory>


										  </it>


									  </its>


								  </sds>


							  </objects>


							  <bisearchEnable>Disable</bisearchEnable>


						  </meta>


					  </metaGet>


				  </SetMbSecResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "objects" : "true"
      },
     "meta" :
      {
       "objects" :
        {
         "ods" :
          {
           "its" :
            {
             "d" :
              {
               "@isShortcut" : "false",
               "@isLink" : "false",
               "@hf" : "false",
               "i" : "OBJ2",
               "n" : "obj2",
               "k" : "535",
               "c" : "1537",
               "p" : "533",
               "h" : "false",
               "sdKey" : "544",
               "hasPrv" : "false",
               "ic" : "false"
              }
            }
          },
         "sds" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "544",
                 "isInherited" : "false",
                 "isSealed" : "false",
                 "discrete" :
                  {
                   "aces" :
                    {
                     "it" :
                      [
                        {
                         "subject" :
                          {
                           "k" : "2147483649",
                           "id" : "АДМИНИСТРАТОРЫ",
                           "n" : "АДМИНИСТРАТОРЫ",
                           "vis" : "true",
                           "type" : "Group",
                           "sid" :
                            {
                             "sid" : "PS-2-1",
                             "type" : "Group"
                            }
                          },
                         "allow" : "1"
                        },
                        {
                         "subject" :
                          {
                           "k" : "2147483649",
                           "id" : "ADMIN",
                           "vis" : "true",
                           "type" : "User",
                           "sid" :
                            {
                             "sid" : "PS-1-1",
                             "type" : "User"
                            }
                          },
                         "allow" : "1"
                        },
                        {
                         "subject" :
                          {
                           "k" : "545",
                           "id" : "NEWADMIN",
                           "n" : "NewAdmin",
                           "vis" : "true",
                           "type" : "User",
                           "sid" :
                            {
                             "sid" : "PS-1-545",
                             "type" : "User"
                            }
                          },
                         "allow" : "98312",
                         "deny" : "16",
                         "audit" : "98312"
                        }
                      ]
                    }
                  },
                 "mandatory" :
                  {
                   "accessToken" :
                    {
                     "its" : ""
                    }
                  },
                 "applyFlags" : "0"
                }
              ]
            }
          }
        }
      },
     "metaGet" :
      {
       "pattern" :
        {
         "objects" : "true",
         "objectsFilter" :
          {
           "keys" :
            {
             "i" : "535"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbSecResult" :
  {
   "id" :
    {
     "id" : "S1!M"
    },
   "metaGet" :
    {
     "id" :
      {
       "id" : "S1!M"
      },
     "meta" :
      {
       "objects" :
        {
         "ods" :
          {
           "its" :
            {
             "d" :
              {
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@hf" : "0",
               "i" : "OBJ2",
               "n" : "obj2",
               "k" : "535",
               "c" : "1537",
               "p" : "533",
               "h" : "0",
               "sdKey" : "546",
               "hasPrv" : "0",
               "ic" : "0"
              }
            }
          },
         "sds" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "546",
                 "isInherited" : "0",
                 "isSealed" : "0",
                 "discrete" :
                  {
                   "aces" :
                    {
                     "it" :
                      [
                        {
                         "subject" :
                          {
                           "k" : "2147483649",
                           "id" : "АДМИНИСТРАТОРЫ",
                           "n" : "АДМИНИСТРАТОРЫ",
                           "vis" : "1",
                           "type" : "Group",
                           "sid" :
                            {
                             "sid" : "PS-2-1",
                             "type" : "Group"
                            }
                          },
                         "allow" : "1"
                        },
                        {
                         "subject" :
                          {
                           "k" : "2147483649",
                           "id" : "ADMIN",
                           "vis" : "1",
                           "type" : "User",
                           "sid" :
                            {
                             "sid" : "PS-1-1",
                             "type" : "User"
                            }
                          },
                         "allow" : "1"
                        },
                        {
                         "subject" :
                          {
                           "k" : "545",
                           "id" : "NEWADMIN",
                           "n" : "NewAdmin",
                           "vis" : "1",
                           "type" : "User",
                           "sid" :
                            {
                             "sid" : "PS-1-545",
                             "type" : "User"
                            }
                          },
                         "allow" : "98312",
                         "deny" : "16",
                         "audit" : "98312"
                        }
                      ]
                    }
                  },
                 "mandatory" :
                  {
                   "accessToken" :
                    {
                     "its" : ""
                    }
                  }
                }
              ]
            }
          }
        },
       "bisearchEnable" : "Disable"
      }
    }
  }
}


public static SetMbSecResult ChangeSecurityDescriptor(MbId metabase, MbSubject subject, string objectId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Исходное описание безопасности объекта
    var objSecDesc = GetObjectSecurityDescriptor(metabase.id, new int[1] {(int)FindObjectById(metabase, objectId).k });
    var objects = objSecDesc.meta.objects;
    //Описание объекта
    var od = objects.ods.its[0];
    //Описание безопасности
    var sd = objects.sds.its[0];
    //Исходные права
    var aces = new List();
    aces.AddRange(sd.discrete.aces);
    //Новый элемент безопасности, который будет добавлен в описание
    var tAce = new SdAce()
    {
        //Разрешение на изменение прав, импорт и экспорт.
        //Соответствует MetabaseObjectPredefinedRights.Access + MetabaseObjectPredefinedRights.ExportData + MetabaseObjectPredefinedRights.ImportData
        allow = 98312,
        //Аудит разрешенных действий
        audit = 98312,
        //Запрет удаления. Соответствует MetabaseObjectPredefinedRights.Delete
        deny = 16,
        subject = subject // Субъект безопасности, которому соответствует элемент
    };
    aces.Add(tAce);
    //Обновление списка элементов безопасности в описании
    sd.discrete.aces = aces.ToArray();
    //Флаг обновления прав доступа
    sd.applyFlags = 0;
    sd.isInherited = false;
    //Параметры выполнения операции
    var setMbSec = new SetMbSec()
    {
        tArg = new SetMbSecArg()
        {
            //Шаблон выполнения операции
            pattern = new MbSecMdPattern()
            {
                objects = true,
            },
            //Метаданные, в которых указывается измененное описание безопасности объекта
            meta = new MbSecMd()
            {
                objects = new MbObjects()
                {
                    ods = new Ods()
                    {
                        its = new Od[1] { od }
                    },
                    sds = new Sds()
                    {
                        its = new Sd[1] { sd }
                    }
                }
            },
            //Параметры обновления списка пользователей после выполнения операции
            metaGet = new GetMbSecArg()
            {
                pattern = new MbSecMdPattern()
                {
                    objects = true,
                    objectsFilter = new MbSecOdFilter()
                    {
                        keys = new int[1] { (int)od.k }
                    }
                }
            }
        },
        //Моникёр репозитория
        tMbSec = new MbId() { id = metabase.id}
    };
    //Изменение прав доступа к объекту
    var result = somClient.SetMbSec(setMbSec);
    return result;
}


См. также:


[SetMbSec:
 Операция](../SetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
