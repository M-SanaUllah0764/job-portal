import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    Box,
    Modal,
    TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const JobCard = ({ job, onDelete, onUpdate }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [title, setTitle] = useState(job.title);
    const [description, setDescription] = useState(job.description);
    const [loading, setLoading] = useState(false);

    const handleDeleteClose = () => setShowDeleteModal(false);
    const handleUpdateClose = () => setShowUpdateModal(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            await onDelete(job._id);
        } catch (error) {
            console.error('Error deleting job:', error);
        } finally {
            setLoading(false);
            handleDeleteClose();
        }
    };

    const handleUpdate = async () => {
        setLoading(true);
        try {
            await onUpdate(job._id, { title, description });
        } catch (error) {
            console.error('Error updating job:', error);
        } finally {
            setLoading(false);
            handleUpdateClose();
        }
    };

    return (
        <Accordion sx={{ marginBottom: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${job._id}-content`}
                id={`panel-${job._id}-header`}
                sx={{
                    border: '1px solid #ddd',
                    backgroundColor: '#f9f9f9',
                    '& .MuiAccordionSummary-content': {
                        justifyContent: 'space-between',
                    },
                }}
            >
                <Typography variant="h6">{job.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                    {job.description}
                </Typography>
                <Box display="flex" justifyContent="flex-end" mt={2} gap={2}>
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => setShowUpdateModal(true)}
                    >
                        Update
                    </Button>
                    <Button
                        color="error"
                        variant="outlined"
                        onClick={() => setShowDeleteModal(true)}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                            },
                        }}
                    >
                        Delete
                    </Button>
                </Box>
            </AccordionDetails>

            {/* Delete Confirmation Modal */}
            <Modal
                open={showDeleteModal}
                onClose={handleDeleteClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title" variant="h6" gutterBottom>
                        Delete Job
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete this job? This action cannot be undone.
                    </Typography>
                    <Box display="flex" justifyContent="flex-end" mt={3} gap={2}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDelete}
                            disabled={loading}
                        >
                            {loading ? 'Deleting...' : 'Delete'}
                        </Button>
                        <Button variant="outlined" onClick={handleDeleteClose}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Update Job Modal */}
            <Modal
                open={showUpdateModal}
                onClose={handleUpdateClose}
                aria-labelledby="modal-title-update"
                aria-describedby="modal-description-update"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title-update" variant="h6" gutterBottom>
                        Update Job
                    </Typography>
                    <TextField
                        label="Job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Job Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Box display="flex" justifyContent="flex-end" mt={3} gap={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpdate}
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update'}
                        </Button>
                        <Button variant="outlined" onClick={handleUpdateClose}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Accordion>
    );
};

export default JobCard;
