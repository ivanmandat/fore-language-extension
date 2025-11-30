# Выполнение параметрического SQL-объекта: Операция SetDbCommand

Выполнение параметрического SQL-объекта: Операция SetDbCommand
-


**


# Выполнение параметрического SQL-объекта


Ниже приведен пример использования операции [SetDbCommand](../SetDbCommand.htm)
 для задания значений параметров и выполнения параметрического SQL-объекта.
 В запросе передается коллекция параметров объекта. Для входных параметров
 заданы значения. В ответе приходит результат выполнения с обновленной
 информацией по параметрам объекта.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDbCommand xmlns="****">
  <id>S1!M!S!M3</id>  </tDbCommand>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <openArgs>true</openArgs>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
  <type>Unknown</type>[![](../../../minus.gif)](../../../#)<openArgs>
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>4294967295</k>  <id>POPULATION_MIN</id>  <n>POPULATION_MIN</n>  <vis>true</vis>  <value>140000000</value>  <dt>2</dt>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4294967295</k>  <id>POPULATION_MAX</id>  <n>POPULATION_MAX</n>  <vis>true</vis>  <value>150000000</value>  <dt>2</dt>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4294967295</k>  <id>COUNTRY_COUNT</id>  <n>COUNTRY_COUNT</n>  <vis>true</vis>  <dt>2</dt>  </it>
  </args>
  </openArgs>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <exec>true</exec>  </metaGet>
  </tArg>
  </SetDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!M3</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ9056</i>  <n>Функция</n>  <k>9056</k>  <c>3842</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <type>StoredProc</type>[![](../../../minus.gif)](../../../#)<execResult>
  <rowsAffected>-1</rowsAffected>[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>POPULATION_MIN</id>  <n>POPULATION_MIN</n>  <vis>1</vis>  <value>140000000</value>  <dt>2</dt>  <binding>UI="IntegerEdit" DIRECTION="Input"</binding>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>POPULATION_MAX</id>  <n>POPULATION_MAX</n>  <vis>1</vis>  <value>150000000</value>  <dt>2</dt>  <binding>UI="IntegerEdit" DIRECTION="Input"</binding>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>COUNTRY_COUNT</id>  <n>COUNTRY_COUNT</n>  <vis>1</vis>  <value>1</value>  <dt>2</dt>  <binding>UI="IntegerEdit" DIRECTION="ReturnValue"</binding>  </it>
  </args>
  </args>
  </execResult>
  </meta>
  </SetDbCommandResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDbCommand" :
  {
   "tDbCommand" :
    {
     "id" : "S1!M!S!M3"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "openArgs" : "true"
      },
     "meta" :
      {
       "type" : "Unknown",
       "openArgs" :
        {
         "args" :
          {
           "it" :
            [
              {
               "k" : "4294967295",
               "id" : "POPULATION_MIN",
               "n" : "POPULATION_MIN",
               "vis" : "true",
               "value" : "140000000",
               "dt" : "2"
              },
              {
               "k" : "4294967295",
               "id" : "POPULATION_MAX",
               "n" : "POPULATION_MAX",
               "vis" : "true",
               "value" : "150000000",
               "dt" : "2"
              },
              {
               "k" : "4294967295",
               "id" : "COUNTRY_COUNT",
               "n" : "COUNTRY_COUNT",
               "vis" : "true",
               "dt" : "2"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "exec" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDbCommandResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!M3"
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
         "@ver" : "1",
         "@hf" : "0",
         "i" : "OBJ9056",
         "n" : "Функция",
         "k" : "9056",
         "c" : "3842",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "type" : "StoredProc",
     "execResult" :
      {
       "rowsAffected" : "-1",
       "args" :
        {
         "args" :
          {
           "it" :
            [
              {
               "k" : "1",
               "id" : "POPULATION_MIN",
               "n" : "POPULATION_MIN",
               "vis" : "1",
               "value" : "140000000",
               "dt" : "2",
               "binding" : "UI="IntegerEdit" DIRECTION="Input""
              },
              {
               "k" : "2",
               "id" : "POPULATION_MAX",
               "n" : "POPULATION_MAX",
               "vis" : "1",
               "value" : "150000000",
               "dt" : "2",
               "binding" : "UI="IntegerEdit" DIRECTION="Input""
              },
              {
               "k" : "3",
               "id" : "COUNTRY_COUNT",
               "n" : "COUNTRY_COUNT",
               "vis" : "1",
               "value" : "1",
               "dt" : "2",
               "binding" : "UI="IntegerEdit" DIRECTION="ReturnValue""
              }
            ]
          }
        }
      }
    }
  }
}


public static SetDbCommandResult ExecuteSQLObject(DbCommandId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDbCommand()
    {
        tArg = new SetDbCommandArg()
        {
            pattern = new DbCommandMdPattern()
            {
                openArgs = true
            },
            meta = new DbCommandMd()
            {
                openArgs = new OdOpenArgs
                {
                    args = new OdArg[]
                    {
                        new OdArg //Входной параметр
                        {
                            k = uint.MaxValue,
                            id = "POPULATION_MIN",
                            n = "POPULATION_MIN",
                            dt = 2, //DbDataType.Integer
                            vis = true,
                            value = "140000000"
                        },
                        new OdArg //Входной параметр
                        {
                            k = uint.MaxValue,
                            id = "POPULATION_MAX",
                            n = "POPULATION_MAX",
                            dt = 2, //DbDataType.Integer
                            vis = true,
                            value = "150000000"
                        },
                        new OdArg //Параметр, в котором будет доступен результат вычисления
                        {
                            k = uint.MaxValue,
                            id = "COUNTRY_COUNT",
                            n = "COUNTRY_COUNT",
                            dt = 2, //DbDataType.Integer
                            vis = true,
                        }
                    }
                }
            },
            metaGet = new DbCommandMdPattern()
            {
                exec = true
            }
        },
        tDbCommand = moniker
    };
    //Выполнение
    var tResult = somClient.SetDbCommand(tSet);
    return tResult;
}


См. также:


[SetDbCommand](../SetDbCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
