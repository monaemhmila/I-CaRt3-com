package tn.esprit.devops_project;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@ActiveProfiles("test")
@TestPropertySource(locations = "classpath:application-test.properties")
public class DevOpsProjectSpringBootApplicationIntegrationTest {

    @Test
    public void mainMethodTest() {
        // Simulate the execution of the main method
        String[] args = new String[] {}; // You can pass command-line arguments here
        DevOps_ProjectSpringBootApplication.main(args);
    }
}
