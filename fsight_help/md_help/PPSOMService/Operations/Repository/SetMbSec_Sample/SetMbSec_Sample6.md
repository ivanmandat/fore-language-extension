# Настройка политики безопасности: Операция SetMbSec

Настройка политики безопасности: Операция SetMbSec
-


**


# Настройка политики безопасности


Ниже приведён пример использования операции [SetMbSec](../SetMbSec.htm)
 для изменения настроек политики безопасности. В запросе передаётся список
 изменяемых настроек парольной политики и контроля доступа. В ответе приходит
 обновлённый список всех настроек политики безопасности и контроля доступа.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>S1!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<policy>
  <passwordPolicy>true</passwordPolicy>  <settings>true</settings>  </policy>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<policy>
[![](../../../minus.gif)](../../../#)<passwordPolicy>
  <minLength>5</minLength>  <requireDifferentChars>true</requireDifferentChars>  <requireDifferentLetterCase>true</requireDifferentLetterCase>[![](../../../minus.gif)](../../../#)<forbiddenStrings>
  <s>admin</s>  <s>user</s>  <s>qwerty</s>  </forbiddenStrings>
  <checkForbiddenStrings>true</checkForbiddenStrings>  <historyLength>5</historyLength>  </passwordPolicy>
[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<allowedDocumentFormats>
  <s>XLS</s>  <s>DOC</s>  <s>PDF</s>  </allowedDocumentFormats>
  <screenshotWithoutSecurity>true</screenshotWithoutSecurity>  <copyToClipboardAllowed>false</copyToClipboardAllowed>  <forceCleanMemory>true</forceCleanMemory>  <maxFailedLogons>10</maxFailedLogons>  </settings>
  </policy>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<policy>
  <passwordPolicy>true</passwordPolicy>  <settings>true</settings>  </policy>
  </pattern>
  </metaGet>
  </tArg>
  </SetMbSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<metaGet xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<policy>
[![](../../../minus.gif)](../../../#)<passwordPolicy>
  <minLength>0</minLength>  <minAge>0</minAge>  <maxAge>0</maxAge>  <restrictUserName>0</restrictUserName>  <restrictFullUserName>0</restrictFullUserName>  <requireDifferentChars>0</requireDifferentChars>  <uniquenessDegree>0</uniquenessDegree>  <requireDifferentLetterCase>0</requireDifferentLetterCase>  <forbiddenStrings />
  <checkForbiddenStrings>0</checkForbiddenStrings>  <maxRepeatedCharCount>0</maxRepeatedCharCount>  <historyLength>0</historyLength>[![](../../../minus.gif)](../../../#)<hashing>
  <isON>0</isON>  <excludeAdmin>0</excludeAdmin>  </hashing>
  <requireDigitsAndChars>0</requireDigitsAndChars>  <requireNonAlphabeticChars>0</requireNonAlphabeticChars>  <warningMaxAge>0</warningMaxAge>  </passwordPolicy>
[![](../../../minus.gif)](../../../#)<settings>
  <objectsIdFormat />
  <allowedDocumentFormats />
  <mandatoryAccessControl>None</mandatoryAccessControl>  <restrictAdminAccess>0</restrictAdminAccess>  <restrictIsaAccess>0</restrictIsaAccess>  <restrictUserDeletion>0</restrictUserDeletion>  <restrictGroupDeletion>0</restrictGroupDeletion>  <discretionaryAccessControl>1</discretionaryAccessControl>  <attributeBasedAccessControl>0</attributeBasedAccessControl>  <methodsCombineAlgorithm>Default</methodsCombineAlgorithm>  <supportUserPrivateFolder>1</supportUserPrivateFolder>  <screenshotWithoutSecurity>0</screenshotWithoutSecurity>  <copyToClipboardAllowed>1</copyToClipboardAllowed>  <auditClipboardOperations>1</auditClipboardOperations>  <allowUserQueries>1</allowUserQueries>  <forceCleanMemory>0</forceCleanMemory>  <enforceApplicationRole>0</enforceApplicationRole>  <checkUserPassword>0</checkUserPassword>  <allowCreateUserGrant>0</allowCreateUserGrant>  <lockIdentifiersPeriod>0</lockIdentifiersPeriod>  <autoLockPeriod>0</autoLockPeriod>  <createDeferredSubjects>0</createDeferredSubjects>  <maxFailedLogons>0</maxFailedLogons>  <failedLogonsCounterResetPeriod>0</failedLogonsCounterResetPeriod>  <isaPresent>0</isaPresent>  <chkObjVerOnUpdFromPef>0</chkObjVerOnUpdFromPef>  <mbId />
  </settings>
  </policy>
  <bisearchEnable>Full</bisearchEnable>[![](../../../minus.gif)](../../../#)<apply>
[![](../../../minus.gif)](../../../#)<onCredentialsRequired>
[![](../../../minus.gif)](../../../#)<logonParams>
  <descr>Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'</descr>  <realm>OBJ21909</realm>  <toAdmin>1</toAdmin>[![](../../../minus.gif)](../../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>test-server</server>  <database>Warehouse</database>  </logonData>
  </logonParams>
  </onCredentialsRequired>
  </apply>
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
       "policy" :
        {
         "passwordPolicy" : "true",
         "settings" : "true"
        }
      },
     "meta" :
      {
       "policy" :
        {
         "passwordPolicy" :
          {
           "minLength" : "5",
           "requireDifferentChars" : "true",
           "requireDifferentLetterCase" : "true",
           "forbiddenStrings" :
            {
             "s" :
              [
                "admin",
                "user",
                "qwerty"
              ]
            },
           "checkForbiddenStrings" : "true",
           "historyLength" : "5"
          },
         "settings" :
          {
           "allowedDocumentFormats" :
            {
             "s" :
              [
                "XLS",
                "DOC",
                "PDF"
              ]
            },
           "screenshotWithoutSecurity" : "true",
           "copyToClipboardAllowed" : "false",
           "forceCleanMemory" : "true",
           "maxFailedLogons" : "10"
          }
        }
      },
     "metaGet" :
      {
       "pattern" :
        {
         "policy" :
          {
           "passwordPolicy" : "true",
           "settings" : "true"
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
       "policy" :
        {
         "passwordPolicy" :
          {
           "minLength" : "0",
           "minAge" : "0",
           "maxAge" : "0",
           "restrictUserName" : "0",
           "restrictFullUserName" : "0",
           "requireDifferentChars" : "0",
           "uniquenessDegree" : "0",
           "requireDifferentLetterCase" : "0",
           "forbiddenStrings" : "",
           "checkForbiddenStrings" : "0",
           "maxRepeatedCharCount" : "0",
           "historyLength" : "0",
           "hashing" :
            {
             "isON" : "0",
             "excludeAdmin" : "0"
            },
           "requireDigitsAndChars" : "0",
           "requireNonAlphabeticChars" : "0",
           "warningMaxAge" : "0"
          },
         "settings" :
          {
           "objectsIdFormat" : "",
           "allowedDocumentFormats" : "",
           "mandatoryAccessControl" : "None",
           "restrictAdminAccess" : "0",
           "restrictIsaAccess" : "0",
           "restrictUserDeletion" : "0",
           "restrictGroupDeletion" : "0",
           "discretionaryAccessControl" : "1",
           "attributeBasedAccessControl" : "0",
           "methodsCombineAlgorithm" : "Default",
           "supportUserPrivateFolder" : "1",
           "screenshotWithoutSecurity" : "0",
           "copyToClipboardAllowed" : "1",
           "auditClipboardOperations" : "1",
           "allowUserQueries" : "1",
           "forceCleanMemory" : "0",
           "enforceApplicationRole" : "0",
           "checkUserPassword" : "0",
           "allowCreateUserGrant" : "0",
           "lockIdentifiersPeriod" : "0",
           "autoLockPeriod" : "0",
           "createDeferredSubjects" : "0",
           "maxFailedLogons" : "0",
           "failedLogonsCounterResetPeriod" : "0",
           "isaPresent" : "0",
           "chkObjVerOnUpdFromPef" : "0",
           "mbId" : ""
          }
        },
       "bisearchEnable" : "Full",
       "apply" :
        {
         "onCredentialsRequired" :
          {
           "logonParams" :
            {
             "descr" : "Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'",
             "realm" : "OBJ21909",
             "toAdmin" : "1",
             "logonData" :
              {
               "driver" : "MSSQL2012",
               "server" : "test-server",
               "database" : "Warehouse"
              }
            }
          }
        }
      }
    }
  }
}


public static SetMbSecResult ChangeSecuritySettings(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var setMbSec = new SetMbSec()
    {
        tArg = new SetMbSecArg()
        {
            //Шаблон выполнения операции
            pattern = new MbSecMdPattern()
            {
                policy = new MbSecPolicyPattern()
                {
                    passwordPolicy = true,
                    settings = true
                }
            },
            //Метаданные с новыми параметрами политики безопасности
            meta = new MbSecMd()
            {
                policy = new MbSecPolicy()
                {
                    passwordPolicy = new MbSecPasswordPolicy() //Парольная политика
                    {
                        minLength = 5, //Минимальная длина пароля
                        requireDifferentChars = true, //Запрет пароля из одинаковых символов
                        requireDifferentLetterCase = true, //Запрет пароля из букв одного регистра
                        checkForbiddenStrings = true, //Проверять пароль на запрещённые строки
                        forbiddenStrings = new string[3] { "admin", "user", "qwerty" },
                        historyLength = 5 //Количество старых паролей, с которыми не может совпадать новый
                    },
                    settings = new MbSecPolicySettings() //Контроль доступа
                    {
                        allowedDocumentFormats = new string[3] { "XLS", "DOC", "PDF" }, //Разрешённые форматы документов
                        screenshotWithoutSecurity = true, //Отображать огромные значки без учёта прав доступа
                        copyToClipboardAllowed = false, //Запрет копирования в буфер обмена
                        forceCleanMemory = true, //Очистка памяти
                        maxFailedLogons = 10 //Максимальное количество неудачных попыток ввода пароля
                    }
                }
            },
            //Параметры обновления информации после выполнения операции
            metaGet = new GetMbSecArg()
            {
                pattern = new MbSecMdPattern()
                {
                    policy = new MbSecPolicyPattern()
                    {
                        passwordPolicy = true,
                        settings = true
                    }
                }
            }
        },
        //Моникёр репозитория
        tMbSec = new MbId() { id = mb }
    };
    //Изменение политики безопасности
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
