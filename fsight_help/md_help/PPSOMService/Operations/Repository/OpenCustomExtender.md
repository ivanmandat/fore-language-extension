# OpenCustomExtender: Операция

OpenCustomExtender: Операция
-


**


# OpenCustomExtender


## Синтаксис


OpenCustomExtenderResult OpenCustomExtender(MbId
 tMb, OpenCustomExtenderArg tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenCustomExtender
 открывает контейнер пользовательских классов.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр открытого соединения с репозиторием, а в поле tArg
 параметры открытия. Моникёр может быть получен при выполнении операции
 [OpenMetabase](OpenMetabase.htm).


Результатом выполнения операции будет моникёр открытого экземпляра контейнера
 пользовательских классов, а также метаданные, если было определено поле
 tArg.metaGet.


## Пример


Ниже приведён пример открытия экземпляра контейнера пользовательских
 классов. В запросе передаётся моникёр соединения с репозиторием и шаблон,
 указывающий необходимость получить список пользовательских классов. В
 ответе возвращается моникёр открытого экземпляра контейнера пользовательских
 классов и полученный список классов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenCustomExtender xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M</id>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <openForEdit>true</openForEdit>[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <classes>Get</classes>  </metaGet>
  </tArg>
  </OpenCustomExtender>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenCustomExtenderResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**15**" hf="**0**">
  <i>OBJ52</i>  <n>Дополнения системных классов</n>  <k>52</k>  <c>5889</c>  <p>0</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<classes>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>19</k>  <id>COMPONENT</id>  <n>Компонент</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>MOD_COMPONENT_CLASS_HANDLER</implAssembly>  <implClass>ComponentClassHandler</implClass>  <description />
  <c>1251073</c>  <h>0</h>  </it>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>16</k>  <id>BUSINESS_APPLICATION</id>  <n>Бизнес-приложение</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>P10002_BUSINESS_APPLICATION_MOD</implAssembly>  <implClass>BusinessApplication</implClass>  <description>Конструктор бизнес-приложения</description>  <c>1054465</c>  <h>0</h>  </it>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>32</k>  <id>DATA_ENTRY_FORM_CLASS</id>  <n>Форма ввода/вывода</n>  <vis>1</vis>  <implURL>http://localhost/FP_App_v10.x/script/operation.js</implURL>  <implCoreAssemblyKey>374</implCoreAssemblyKey>  <implCoreClass>CustomClassOperationsHandlerWeb</implCoreClass>  <implAssembly>ASM_INPUT_FORM_V3_PRESENTERS</implAssembly>  <implClass>CustomClassOperationsHandler</implClass>  <description />
  <c>2103041</c>  <h>0</h>  </it>
  </its>
  </classes>
  </meta>
  </OpenCustomExtenderResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenCustomExtender" :
  {
   "tMb" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M"
    },
   "tArg" :
    {
     "openForEdit" : "true",
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "classes" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenCustomExtenderResult" :
  {
   "id" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "15",
         "@hf" : "0",
         "i" : "OBJ52",
         "n" : "Дополнения системных классов",
         "k" : "52",
         "c" : "5889",
         "p" : "0",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "classes" :
      {
       "its" :
        {
         "it" :
          [
            {
             "@ic" : "1",
             "k" : "19",
             "id" : "COMPONENT",
             "n" : "Компонент",
             "vis" : "1",
             "implURL" : "",
             "implCoreClass" : "",
             "implAssembly" : "MOD_COMPONENT_CLASS_HANDLER",
             "implClass" : "ComponentClassHandler",
             "description" : "",
             "c" : "1251073",
             "h" : "0"
            },
            {
             "@ic" : "1",
             "k" : "16",
             "id" : "BUSINESS_APPLICATION",
             "n" : "Бизнес-приложение",
             "vis" : "1",
             "implURL" : "",
             "implCoreClass" : "",
             "implAssembly" : "P10002_BUSINESS_APPLICATION_MOD",
             "implClass" : "BusinessApplication",
             "description" : "Конструктор бизнес-приложения",
             "c" : "1054465",
             "h" : "0"
            },
            {
             "@ic" : "1",
             "k" : "32",
             "id" : "DATA_ENTRY_FORM_CLASS",
             "n" : "Форма ввода\/вывода",
             "vis" : "1",
             "implURL" : "http:\/\/localhost\/FP_App_v10.x\/script\/operation.js",
             "implCoreAssemblyKey" : "374",
             "implCoreClass" : "CustomClassOperationsHandlerWeb",
             "implAssembly" : "ASM_INPUT_FORM_V3_PRESENTERS",
             "implClass" : "CustomClassOperationsHandler",
             "description" : "",
             "c" : "2103041",
             "h" : "0"
            }
          ]
        }
      }
    }
  }
}


public static OpenCustomExtenderResult OpenCustomExtender(string mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenCustomExtender()
    {
        tArg = new OpenCustomExtenderArg()
        {
            openForEdit = true,
            metaGet = new CustomExtenderMdPattern()
            {
                classes = ListOperation.Get
            }
        },
        tMb = new MbId() { id = mb }
    };
    // Открытие контейнера пользовательских классов
    var tResult = somClient.OpenCustomExtender(tOpen);
    return tResult;
}


См. также:


[Работа
 с объектами пользовательских классов](Custom_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
